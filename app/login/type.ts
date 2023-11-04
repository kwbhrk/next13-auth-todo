import * as z from 'zod';
import { loginSchema } from '@/app/schema/login';

export type LoginFormDataType = z.infer<typeof loginSchema>;
