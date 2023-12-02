import { authOptions } from '@/app/_libs/auth';
import prisma from '@/app/_libs/prisma';
import { taskSchema } from '@/app/_schema/task';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

// TODO: 各CRUD処理を関数にまとめる
/**
 * タスク一覧取得
 */
export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: '許可されていないメソッドです。' }, { status: 405 });
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: '未ログインの状態です。再度ログイン後、お試しください。' },
      { status: 401 }
    );
  }

  try {
    // ログイン中のユーザーが登録したタスクを新しい順に取得
    const allTasks = await prisma.task.findMany({
      where: {
        userId: session?.user?.id,
      },
      // id, contentのみ取得
      select: {
        id: true,
        content: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ tasks: allTasks }, { status: 200 });
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

/**
 * タスク作成
 */
export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: '許可されていないメソッドです。' }, { status: 405 });
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: '未ログインの状態です。再度ログイン後、お試しください。' },
      { status: 401 }
    );
  }

  try {
    const { content } = await req.json();
    // バリデーションチェック
    taskSchema.parse({ content });
    // タスクを作成
    await prisma.task.create({
      data: {
        content,
        userId: session?.user?.id,
      },
    });

    return NextResponse.json({ message: 'タスクを作成しました。' }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const validationMessage = err?.errors?.[0]?.message;
    return NextResponse.json(
      {
        message: validationMessage ?? err?.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  if (req.method !== 'PUT') {
    return NextResponse.json({ message: '許可されていないメソッドです。' }, { status: 405 });
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: '未ログインの状態です。再度ログイン後、お試しください。' },
      { status: 401 }
    );
  }

  try {
    const { id, content } = await req.json();
    // バリデーションチェック
    taskSchema.parse({ content });
    // idに一致したタスクを更新
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });

    return NextResponse.json({ message: 'タスクを更新しました。' }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const validationMessage = err?.errors?.[0]?.message;
    return NextResponse.json(
      {
        message: validationMessage ?? err?.message,
      },
      { status: 500 }
    );
  }
}

// export async function DELETE(req: Request, res: NextResponse) {
//   // TODO: 認証状態をチェック後、通過したもののみ処理継続(カスタムフックスに置き換える)
// }
