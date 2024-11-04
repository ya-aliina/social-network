import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ArticleType } from 'entities/Article';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
    title: 'shared/Tab',
    component: Tab,
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
type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
