import { redirectIfAuthenticated } from '@/app/utils/redirectIfAuthenticated';
import { SignUpForm } from './SignUpForm';

const SignUpPage = async () => {
  // ログイン認証後はトップを表示
  await redirectIfAuthenticated('/');

  return <SignUpForm />;
};

export default SignUpPage;
