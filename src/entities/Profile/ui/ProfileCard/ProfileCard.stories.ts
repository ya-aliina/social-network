import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/square-avatar.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {
        data: {
            avatar: Avatar,
            username: 'admin',
            firstname: 'Alina',
            lastname: 'Makovii',
            age: 25,
            country: Country.Ukraine,
            city: 'Kramatorsk',
            currency: Currency.UAH,
        },
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

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
    args: {
        error: 'Error',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const WithErrorDark: Story = {
    args: {
        error: 'Error',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithErrorLilac: Story = {
    args: {
        error: 'Error',
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const IsLoadingLight: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const IsLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoadingLilac: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};
