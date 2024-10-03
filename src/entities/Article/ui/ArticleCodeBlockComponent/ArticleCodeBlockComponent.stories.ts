import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Light: Story = {
    args: {},
    decorators: [],
};
