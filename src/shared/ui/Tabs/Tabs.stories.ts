import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ArticleType } from 'entities/Article';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tab',
    component: Tabs,
    args: {
        tabs: [
            {
                value: ArticleType.ALL,
                content: 'tab1',
            },
            {
                value: ArticleType.ECONOMICS,
                content: 'tab2',
            },
            {
                value: ArticleType.IT,
                content: 'tab3',
            },
        ],
        value: ArticleType.ECONOMICS,
        onTabClick: action('onTabClick'),
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
