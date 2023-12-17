import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';

const meta = {
  title: 'Ui/Modal',
  component: Modal,
  argTypes: { closeModal: { action: 'clicked' } },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: <p>テストモーダル</p>,
  },
};
