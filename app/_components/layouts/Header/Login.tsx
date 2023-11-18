import { Button } from '@/app/_components/ui/Button';

export const LoginMenu = () => (
  <>
    <Button fontSize="14px" bold isLink href="/login">
      ログイン
    </Button>
    <Button
      border="1px solid #e4e4e7"
      backgroundColor="#ffffff"
      color="#18181b"
      fontSize="14px"
      bold
      isLink
      href="/signup"
    >
      新規登録
    </Button>
  </>
);
