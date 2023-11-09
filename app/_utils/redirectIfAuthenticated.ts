import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_libs/auth';
import { redirect } from 'next/navigation';

/**
 * redirectIfAuthenticated
 * サーバーで認証済みの場合、指定URLへリダイレクトさせる
 */
export const redirectIfAuthenticated = async (redirectPath: string) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(redirectPath);
  }
};
