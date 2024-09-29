import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [StoreDecorator({
        profile: {
            form: {
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
    })],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};
