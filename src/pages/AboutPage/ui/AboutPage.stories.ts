import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLight: Story = {
    args: {
        children: 'text',
    },
};

export const AboutPageDark: Story = {
    args: {
        children: 'text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
