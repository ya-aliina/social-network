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

export const NavbarLight: Story = {
    args: { },
};

export const NavbarDark: Story = {
    args: { },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthNavbar: Story = {
    args: { },
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const AuthNavbarDark: Story = {
    args: { },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
