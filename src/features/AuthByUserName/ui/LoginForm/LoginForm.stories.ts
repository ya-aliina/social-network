import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    args: {
    },
};

export const LoginFormDark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoginFormWithError: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '122',
            error: 'Error',
        },
    })],
};

export const LoginFormLoading: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
};
