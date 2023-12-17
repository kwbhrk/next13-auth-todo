import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
  title: 'Ui/Input',
  component: Input,
  argTypes: { onChange: { action: 'changed' } },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    fullWidth: false,
  },
};
