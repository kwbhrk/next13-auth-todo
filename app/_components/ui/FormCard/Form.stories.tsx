import type { Meta, StoryObj } from '@storybook/react';
import { FormCard } from './index';
import { Input } from '../Input';
import { LayoutBox } from '../LayoutBox';
import { Button } from '../Button';

const meta = {
  title: 'Ui/FormCard',
  component: FormCard,
} satisfies Meta<typeof FormCard>;

export default meta;

type Story = StoryObj<typeof FormCard>;

export const Default: Story = {
  args: {
    children: (
      <LayoutBox direction="column" width="auto" gap="8px">
        <LayoutBox direction="column" width="100%" gap="4px">
          <Input type="text" fullWidth />
          <Input type="text" fullWidth />
        </LayoutBox>
        <Button width="100%">送信</Button>
      </LayoutBox>
    ),
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => e.preventDefault(),
  },
};
