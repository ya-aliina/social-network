import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur ex praesentium quibusdam, recusandae rerum similique vel voluptatibus voluptatum! Blanditiis dicta ducimus ex minus obcaecati quae quidem sed tempora?',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur ex praesentium quibusdam, recusandae rerum similique vel voluptatibus voluptatum! Blanditiis dicta ducimus ex minus obcaecati quae quidem sed tempora?',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
