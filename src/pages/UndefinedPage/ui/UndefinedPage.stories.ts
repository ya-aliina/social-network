import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import UndefinedPage from './UndefinedPage';

const meta: Meta<typeof UndefinedPage> = {
    title: 'pages/UndefinedPage',
    component: UndefinedPage,
};

export default meta;
type Story = StoryObj<typeof UndefinedPage>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};
