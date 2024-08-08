import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonTheme } from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ClearLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AccentLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const AccentDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
