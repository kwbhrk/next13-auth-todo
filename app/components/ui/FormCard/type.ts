import type { EventType } from '@/app/types/Event';

export type FormCardProps = {
  onSubmit: EventType['onSubmit'];
  children: React.ReactNode;
};
