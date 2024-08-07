import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {},
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Clear: Story = {
    args: {

    },
};
