import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherLight: Story = {
    args: {},
};

export const ThemeSwitcherDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
