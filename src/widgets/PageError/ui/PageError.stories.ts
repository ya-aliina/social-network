import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {
    args: {},
};

export const PageErrorDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
