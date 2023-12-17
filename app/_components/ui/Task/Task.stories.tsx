import type { Meta, StoryObj } from '@storybook/react';
import { Task } from './index';

const meta = {
  title: 'Ui/Task',
  component: Task,
  argTypes: { onChange: { action: 'changed' } },
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    id: 1,
    content: 'Task',
    isCheckedTask: false,
  },
};
