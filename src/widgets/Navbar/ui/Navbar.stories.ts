import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const AuthLight: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const AuthDark: Story = {
    args: { },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const AuthLilac: Story = {
    args: { },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};
