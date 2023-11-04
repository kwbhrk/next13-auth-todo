import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'メールアドレスの形式ではありません。' })
    .min(1, { message: '入力されていません。' }),
  password: z.string().min(1, { message: '入力されていません。' }),
});
