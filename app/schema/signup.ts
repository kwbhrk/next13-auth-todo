import * as z from 'zod';

export const signupSchema = z.object({
  name: z
    .string()
    .max(50, { message: '50文字以内で入力してください。' })
    .min(1, { message: '入力必須の項目です。' }),
  email: z
    .string()
    .email({ message: 'メールアドレスの形式ではありません。' })
    .min(1, { message: '入力必須の項目です。' }),
  password: z
    .string()
    .min(1, { message: '入力必須の項目です。' })
    .refine((value) => /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,50}$/i.test(value), {
      message: '半角英数字をそれぞれ1文字以上含む8文字以上50文字以内で入力してください。',
    }),
});
