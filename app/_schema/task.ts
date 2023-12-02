import * as z from 'zod';

export const taskSchema = z.object({
  content: z
    .string()
    .max(100, { message: '100文字以内で入力してください。' })
    .min(1, { message: '入力必須の項目です。' }),
});
