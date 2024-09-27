import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextAlign, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextItems: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
};

export const TextItemsCenter: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        align: TextAlign.CENTER,
    },
};

export const TextItemsRight: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        align: TextAlign.RIGHT,
    },
};

export const TextItemsDark: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorItems: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
};

export const ErrorItemsDark: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyText: Story = {
    args: {
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
