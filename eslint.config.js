const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');
const { rules } = require('@eslint/js/src/configs/eslint-all');
const reactHooks = require('eslint-plugin-react-hooks');

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const config = [
    ...compat.extends(
        'airbnb',
        'airbnb/hooks',
        'plugin:i18next/recommended',
    ),
    {
        languageOptions: {
            globals: {
                __API__: true,
                __IS_DEV__: true,
                __PROJECT__: true,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            'linebreak-style': 'off',
            'react/jsx-indent': ['warn', 4],
            'react/jsx-indent-props': ['warn', 4],
            'import/extensions': 'off',
            indent: ['warn', 4],
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'react/require-default-props': 'off',
            'import/prefer-default-export': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
            'react/function-component-definition': 'off',
            'react/jsx-props-no-spreading': 'off',
            'no-shadow': 'off',
            'no-underscore-dangle': 'off',
            'max-len': ['warn', { code: 125, ignoreComments: true }],
            '@typescript-eslint/no-unused-vars': 'warn',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'i18next/no-literal-string': [
                'error',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
            'no-param-reassign': 'off',
            'typescript-eslint/ban-ts-comment': 'off',
            'no-undef': 'off',
            'react/no-array-index-key': 'off',
            'arrow-body-style': 'off',
        },
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];

module.exports = config;
