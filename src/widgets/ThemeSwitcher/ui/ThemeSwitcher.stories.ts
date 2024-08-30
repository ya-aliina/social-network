import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
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
