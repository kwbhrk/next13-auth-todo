import * as z from 'zod';
import { signupSchema } from '@/app/_schema/signup';

export type SignUpFormDataType = z.infer<typeof signupSchema>;
