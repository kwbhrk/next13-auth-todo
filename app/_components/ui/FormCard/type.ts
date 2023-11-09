import type { EventType } from '@/app/_types/Event';

export type FormCardProps = {
  onSubmit: EventType['onSubmit'];
  children: React.ReactNode;
};
