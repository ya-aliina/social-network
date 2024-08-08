import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {
    args: {},
};

export const SidebarDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
