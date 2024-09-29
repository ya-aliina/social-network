import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: undefined,
            isLoading: false,
        },
    })],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const WithErrorLight: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                error: 'Error',
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const WithErrorDark: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                error: 'Error',
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const WithErrorLilac: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                error: 'Error',
            },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};

export const LoadingLight: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const LoadingDark: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const LoadingLilac: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};
