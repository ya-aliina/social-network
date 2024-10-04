import type { Meta, StoryObj } from '@storybook/react';

import AvatarImageSquare from 'shared/assets/tests/square-avatar.jpg';
import RectangularAvatarImage from 'shared/assets/tests/rectangular-avatar.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const SquareSourceImage: Story = {
    args: {
        src: AvatarImageSquare,
        size: 150,
        alt: 'avatar',
    },
};

export const RectangularSourceImage: Story = {
    args: {
        src: RectangularAvatarImage,
        size: 150,
        alt: 'avatar',
    },
};

export const Small: Story = {
    args: {
        src: AvatarImageSquare,
        size: 50,
        alt: 'avatar',
    },
};
