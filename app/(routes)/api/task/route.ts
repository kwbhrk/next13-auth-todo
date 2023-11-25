import { authOptions } from '@/app/_libs/auth';
import prisma from '@/app/_libs/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
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

// export async function POST(req: Request, res: NextResponse) {
//   // TODO: 認証状態をチェック後、通過したもののみ処理継続(カスタムフックスに置き換える)
// }

// export async function PUT(req: Request, res: NextResponse) {
//   // TODO: 認証状態をチェック後、通過したもののみ処理継続(カスタムフックスに置き換える)
// }

// export async function DELETE(req: Request, res: NextResponse) {
//   // TODO: 認証状態をチェック後、通過したもののみ処理継続(カスタムフックスに置き換える)
// }
