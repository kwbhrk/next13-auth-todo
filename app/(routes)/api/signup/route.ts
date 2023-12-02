import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/_libs/prisma';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: '許可されていないメソッドです。' }, { status: 405 });
  }

  // TODO: バックエンド側でもzodでバリデーションチェックを行う
  try {
    const { name, email, password } = await req.json();

    const signupUser = await prisma.user.findUnique({ where: { email } });

    if (signupUser) {
      return NextResponse.json(
        { message: 'このメールアドレスは現在登録できません。' },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(
      { message: 'ユーザー登録が完了しました。', user: createdUser },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json(
      {
        message: err.message,
      },
      { status: 500 }
    );
  }
}
