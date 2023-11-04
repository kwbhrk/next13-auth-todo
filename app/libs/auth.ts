import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './prisma';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: { secret: process.env.NEXTAUTH_SECRET },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      // credentialsではログインフォームの入力項目を定義
      credentials: {
        email: {
          label: 'メールアドレス',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'パスワード', type: 'password' },
      },
      async authorize(credentials) {
        // credentials.emailとcredentials.passwordにログインフォームの入力値が入っている
        if (!credentials?.email || !credentials?.password) {
          throw new Error('メールアドレスとパスワードは必須です。');
        }

        // userテーブルからメールアドレスでユーザーを検索
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user?.password) {
          throw new Error('メールアドレスかパスワードが間違っています。');
        }

        const isCorrectedPassword = await bcrypt.compare(credentials.password, user.password);

        if (!isCorrectedPassword) {
          throw new Error('メールアドレスかパスワードが間違っています。');
        }

        return user as any;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};
