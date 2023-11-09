import * as z from 'zod';
import { loginSchema } from '@/app/_schema/login';

export type LoginFormDataType = z.infer<typeof loginSchema>;
