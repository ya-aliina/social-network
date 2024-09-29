import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};
