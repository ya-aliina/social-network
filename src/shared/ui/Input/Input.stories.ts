import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Type Text',
        autofocus: true,
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};
