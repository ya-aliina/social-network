import type { Meta, StoryObj } from '@storybook/react';

import AvatarImage from 'shared/assets/tests/storybook.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImage,
        size: 150,
        alt: 'avatar',
    },
};

export const Small: Story = {
    args: {
        src: AvatarImage,
        size: 50,
        alt: 'avatar',
    },
};
