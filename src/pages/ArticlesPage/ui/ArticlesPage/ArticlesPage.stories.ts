import type { Meta, StoryObj } from '@storybook/react';
import Avatar from 'shared/assets/tests/square-avatar.jpg';
import Cover from 'shared/assets/tests/rectangular-avatar.jpg';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

const article: Article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Руководство по JavaScript, часть 1: первая программа, особенности языка, стандарты',
    img: Cover,
    views: 814,
    createdAt: '02.10.2024',
    user: {
        id: '1',
        username: 'alina',
        avatar: Avatar,
    },
    type: [
        ArticleType.IT,
    ],
} as Article;

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};
