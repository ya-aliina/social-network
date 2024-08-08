import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Accent: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.ACCENT,
    },
};
