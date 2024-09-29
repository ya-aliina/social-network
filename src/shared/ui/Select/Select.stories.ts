import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    args: {
        label: 'some text',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '123', content: 'Второй пункт' },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};
