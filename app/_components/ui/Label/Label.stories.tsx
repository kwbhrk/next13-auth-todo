import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index';

const meta = {
  title: 'Ui/Label',
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};
