import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
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
};

export const WithError: Story = {
    args: {
        error: 'Error',
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
