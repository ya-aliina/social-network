import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    args: {
        children: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + 'import { Code } from \'./Code\';\n'
            + '\n'
            + 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    argTypes: {},\n'
            + '};\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof Code>;',
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    decorators: [
        ThemeDecorator(Theme.LILAC),
    ],
};
