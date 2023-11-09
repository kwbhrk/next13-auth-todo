import { redirectIfAuthenticated } from '@/app/_utils/redirectIfAuthenticated';
import { LoginForm } from './LoginForm';

const LoginPage = async () => {
  // ログイン認証後はトップを表示
  await redirectIfAuthenticated('/');

  return <LoginForm />;
};

export default LoginPage;
