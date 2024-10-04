import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Text, TextAlign, TextSize, TextTheme,
} from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const AlignItemsLeft: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        align: TextAlign.LEFT,
    },
};

export const AlignItemsCenter: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        align: TextAlign.CENTER,
    },
};

export const AlignItemsRight: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        align: TextAlign.RIGHT,
    },
};

export const Light: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const ErrorLight: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorLilac: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const TitleLight: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleLilac: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const TextLight: Story = {
    args: {
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextDark: Story = {
    args: {
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextLilac: Story = {
    args: {
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.LILAC)],
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        size: TextSize.L,
    },
};
