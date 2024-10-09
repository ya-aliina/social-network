import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AddNewComment from './AddNewComment';

const meta: Meta<typeof AddNewComment> = {
    title: 'features/AddNewComment',
    component: AddNewComment,
    decorators: [
        StoreDecorator({}),
    ],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Light: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};
