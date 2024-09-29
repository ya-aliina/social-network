import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur ex praesentium quibusdam, recusandae rerum similique vel voluptatibus voluptatum! Blanditiis dicta ducimus ex minus obcaecati quae quidem sed tempora?',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Lilac: Story = {
    decorators: [ThemeDecorator(Theme.LILAC)],
};
