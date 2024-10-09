import type { Meta, StoryObj } from '@storybook/react';
import Avatar from 'shared/assets/tests/square-avatar.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    args: {
        comment: {
            id: '1',
            text: 'Hi there!',
            user: {
                id: '1',
                username: 'Alina',
                avatar: Avatar,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};

export const LoadngLight: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const LoadngDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const LoadngLilac: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};
