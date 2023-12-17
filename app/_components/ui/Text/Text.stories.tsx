import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './index';

const meta = {
  title: 'Ui/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Text',
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    bold: true,
  },
};
