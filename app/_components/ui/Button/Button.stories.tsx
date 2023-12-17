import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'Ui/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    backgroundColor: '#d63838',
  },
};

export const DefaultBold: Story = {
  args: {
    ...Default.args,
    bold: true,
  },
};

export const DefaultLink: Story = {
  args: {
    ...Default.args,
    isLink: true,
    href: 'https://www.google.co.jp/',
  },
};

export const DefaultExternalLink: Story = {
  args: {
    ...DefaultLink.args,
    externalLink: true,
  },
};
