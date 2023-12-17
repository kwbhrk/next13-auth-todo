import type { Meta, StoryObj } from '@storybook/react';
import { LayoutBox } from './index';

const meta = {
  title: 'Ui/LayoutBox',
  component: LayoutBox,
} satisfies Meta<typeof LayoutBox>;

export default meta;

type Story = StoryObj<typeof LayoutBox>;

export const Double: Story = {
  args: {
    children: (
      <>
        <LayoutBox background="red" width="20%">
          LayoutBox1
        </LayoutBox>
        <LayoutBox background="blue" width="20%">
          LayoutBox2
        </LayoutBox>
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Double.args,
    direction: 'column',
  },
};

export const JustifyStart: Story = {
  args: {
    ...Double.args,
    justify: 'flex-start',
  },
};

export const JustifyCenter: Story = {
  args: {
    ...Double.args,
    justify: 'center',
  },
};

export const JustifyEnd: Story = {
  args: {
    ...Double.args,
    justify: 'flex-end',
  },
};

export const JustifyBetween: Story = {
  args: {
    ...Double.args,
    justify: 'space-between',
  },
};

export const Gap4Px: Story = {
  args: {
    ...Double.args,
    direction: 'column',
    gap: '4px',
  },
};

export const Gap8Px: Story = {
  args: {
    ...Double.args,
    direction: 'column',
    gap: '8px',
  },
};

export const Multiple: Story = {
  args: {
    children: (
      <>
        <LayoutBox background="red" width="700px">
          LayoutBox1
        </LayoutBox>
        <LayoutBox background="blue" width="700px">
          LayoutBox2
        </LayoutBox>
        <LayoutBox background="green" width="700px">
          LayoutBox3
        </LayoutBox>
        <LayoutBox background="purple" width="700px">
          LayoutBox3
        </LayoutBox>
        <LayoutBox background="orange" width="700px">
          LayoutBox3
        </LayoutBox>
      </>
    ),
  },
};
