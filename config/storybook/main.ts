import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    implementation: require('sass'),
                    additionalData: `@import "./src/china/static/vars.scss";
            `,
                },
            }
        }
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
};
export default config;
