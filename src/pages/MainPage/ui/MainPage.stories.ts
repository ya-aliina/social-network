import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLight: Story = {
    args: {
        children: 'text',
    },
};

export const MainPageDark: Story = {
    args: {
        children: 'text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};
