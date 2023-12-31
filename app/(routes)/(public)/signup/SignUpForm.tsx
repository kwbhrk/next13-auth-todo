'use client';
import { css } from '@/styled-system/css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/app/_schema/signup';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/app/_components/ui/Input';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import { Button } from '@/app/_components/ui/Button';
import { FormCard } from '@/app/_components/ui/FormCard';
import { Label } from '@/app/_components/ui/Label';
import { SignUpFormDataType } from './type';
import { Error } from '@/app/_components/ui/Error';
import { ErrorText } from '@/app/_components/ui/Error/ErrorText';

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFormDataType>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(signupSchema),
  });

  const handleSubmitLogin = handleSubmit(async ({ name, email, password }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (response?.ok) {
      // 登録後、そのまま登録情報でログインし、タスク一覧画面へ遷移する
      await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      router.push('/');
      router.refresh();
      return;
    }

    const error = await response.json();
    setError('root.server', {
      type: 'server',
      message: error.message,
    });
  });

  return (
    <FormCard onSubmit={handleSubmitLogin}>
      <h2 className={css({ fontWeight: 'bold' })}>新規登録</h2>
      <LayoutBox direction="column" gap="16px">
        <LayoutBox direction="column" gap="8px">
          <Label htmlFor="name" text="名前" fullWidth required>
            <Input id="name" type="name" placeholder="名前を入力" fullWidth {...register('name')} />
          </Label>
          <Error name="name" errors={errors} />
          <Label htmlFor="email" text="メールアドレス" fullWidth required>
            <Input
              id="email"
              type="email"
              placeholder="メールアドレスを入力"
              fullWidth
              {...register('email')}
            />
          </Label>
          <Error name="email" errors={errors} />
          <Label htmlFor="password" text="パスワード" fullWidth required>
            <Input
              id="password"
              type="password"
              placeholder="パスワードを入力"
              fullWidth
              {...register('password')}
            />
          </Label>
          <Error name="password" errors={errors} />
        </LayoutBox>
        {errors.root?.server && <ErrorText message={errors.root.server.message} />}
        <Button width="100%" type="submit">
          登録する
        </Button>
      </LayoutBox>
    </FormCard>
  );
};
