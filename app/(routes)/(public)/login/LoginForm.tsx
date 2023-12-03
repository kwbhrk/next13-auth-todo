'use client';
import { css } from '@/styled-system/css';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/app/_schema/login';
import { Input } from '@/app/_components/ui/Input';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import { Button } from '@/app/_components/ui/Button';
import { FormCard } from '@/app/_components/ui/FormCard';
import { Label } from '@/app/_components/ui/Label';
import { useRouter } from 'next/navigation';
import { LoginFormDataType } from '@/app/(routes)/(public)/login/type';
import { ErrorText } from '@/app/_components/ui/Error/ErrorText';

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormDataType>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitLogin = handleSubmit(async ({ email, password }) => {
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then((res) => {
        if (res?.error) {
          setError('root.server', {
            type: 'server',
            message: res.error,
          });
          return;
        }
        router.push('/');
        // NOTE: push後はrefreshしないと、サーバーコンポーネントは再レンダリングされない。(つまりデータ更新されない)
        //  ちなみにrefreshしてもuseStateやブラウザの状態は失われない。
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // TODO: h2タグをHeadingコンポーネントに変えてh2,h3,h4と変えられるようにする
  return (
    <FormCard onSubmit={handleSubmitLogin}>
      <h2 className={css({ fontWeight: 'bold' })}>ログイン</h2>
      <LayoutBox direction="column" gap="12px">
        <LayoutBox direction="column" gap="4px">
          <Label htmlFor="email" text="メールアドレス" fullWidth>
            <Input
              id="email"
              type="email"
              placeholder="メールアドレスを入力"
              fullWidth
              {...register('email')}
            />
          </Label>
          <ErrorText message={errors.email?.message} />
          <Label htmlFor="password" text="パスワード" fullWidth>
            <Input
              id="password"
              type="password"
              placeholder="パスワードを入力"
              fullWidth
              {...register('password')}
            />
          </Label>
          <ErrorText message={errors.password?.message} />
        </LayoutBox>
        {errors.root?.server && <ErrorText message={errors.root.server.message} />}
        <Button width="100%" type="submit">
          ログインする
        </Button>
      </LayoutBox>
    </FormCard>
  );
};
