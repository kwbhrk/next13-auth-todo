'use client';
import { Button } from '@/app/_components/ui/Button';
import { signOut } from 'next-auth/react';

export const LogoutMenu = () => {
  const handleLogoutClick = () => {
    // signOut関数にcallbackUrlを渡すことで、ログアウト後に遷移するURLを指定できる
    signOut({
      callbackUrl: '/login',
    });
  };

  return (
    <Button
      border="1px solid #e4e4e7"
      backgroundColor="#ffffff"
      color="#18181b"
      fontSize="14px"
      bold
      onClick={handleLogoutClick}
    >
      ログアウト
    </Button>
  );
};
