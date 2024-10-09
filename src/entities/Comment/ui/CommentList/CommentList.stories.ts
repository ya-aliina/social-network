import type { Meta, StoryObj } from '@storybook/react';
import Avatar from 'shared/assets/tests/square-avatar.jpg';
import Avatar2 from 'shared/assets/tests/rectangular-avatar.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    args: {
        comments: [
            {
                id: '1',
                text: 'Hi there!',
                user: {
                    id: '1',
                    username: 'Alina',
                    avatar: Avatar,
                },
            },
            {
                id: '2',
                text: 'Hello world',
                user: {
                    id: '2',
                    username: 'Alla',
                    avatar: Avatar2,
                },
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};

export const LoadingLight: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const LoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const LoadingLilac: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};

export const NoCommentLight: Story = {
    args: {
        comments: [],
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const NoCommentDark: Story = {
    args: {
        comments: [],
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const NoCommentLilac: Story = {
    args: {
        comments: [],
    },
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};
