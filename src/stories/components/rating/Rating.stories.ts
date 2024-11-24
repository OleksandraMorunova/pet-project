import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Rating } from './Rating';

const meta = {
  title: 'Component/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
      color: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Rating',
  },
};
