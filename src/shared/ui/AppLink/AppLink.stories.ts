import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedLight: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.INVERTED,
    },
};

export const InvertedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
