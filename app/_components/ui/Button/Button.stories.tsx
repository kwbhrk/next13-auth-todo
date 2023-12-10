import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonA: Story = {
  args: {
    children: 'Button',
  },
};
