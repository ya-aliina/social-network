import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import UndefinedPage from './UndefinedPage';

const meta: Meta<typeof UndefinedPage> = {
    title: 'pages/UndefinedPage',
    component: UndefinedPage,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof UndefinedPage>;

export const UndefinedPageLight: Story = {
    args: {},
};

export const UndefinedPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
