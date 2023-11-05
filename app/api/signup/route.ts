import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prisma';

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  // TODO: バックエンド側でもzodでバリデーションチェックを行う

  try {
    const { name, email, password } = await req.json();

    const signupUser = await prisma.user.findUnique({ where: { email } });

    if (signupUser) {
      return NextResponse.json(
        { message: 'The email address is already in use by another account.' },
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

    return NextResponse.json({ message: 'success', user: createdUser }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      {
        message: err.message,
      },
      { status: 500 }
    );
  }
}