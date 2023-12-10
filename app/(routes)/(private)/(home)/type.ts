import * as z from 'zod';
import { taskSchema } from '@/app/_schema/task';

export type TaskType = z.infer<typeof taskSchema>;
