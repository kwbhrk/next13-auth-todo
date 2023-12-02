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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return user as any;
      },
    }),
  ],
  callbacks: {
    // セッション情報にユーザーIDを追加
    async session({ session }) {
      const authUser = await prisma?.user.findUnique({
        where: { email: session.user.email },
      });

      if (session?.user && authUser?.id) {
        session.user.id = authUser.id;
      }

      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
