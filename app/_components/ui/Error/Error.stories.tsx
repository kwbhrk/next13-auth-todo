import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';

const meta = {
  title: 'Ui/ErrorText',
  component: ErrorText,
} satisfies Meta<typeof ErrorText>;

export default meta;

type Story = StoryObj<typeof ErrorText>;

export const Default: Story = {
  args: {
    message: 'この項目は必須です',
  },
};
