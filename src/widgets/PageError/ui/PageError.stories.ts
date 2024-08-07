import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Clear: Story = {
    args: {},
};
