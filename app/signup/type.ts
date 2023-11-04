import * as z from 'zod';
import { signupSchema } from '@/app/schema/signup';

export type SignUpFormDataType = z.infer<typeof signupSchema>;
