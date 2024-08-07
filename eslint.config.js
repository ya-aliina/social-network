const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');
const { rules } = require('@eslint/js/src/configs/eslint-all');

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
        languageOptions: { globals: globals.browser },
        rules: {
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
            'react/jsx-props-no-spreading': 'warn',
            'no-shadow': 'off',
            'no-underscore-dangle': 'off',
            'max-len': ['warn', { code: 120, ignoreComments: true }],
            '@typescript-eslint/no-unused-vars': ['warn'],
            'i18next/no-literal-string': [
                'error',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
        },
    },
    {
        files: ['**/src/**/*.test.{ts, tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    },
    {
        files: ['**/src/**/*.test.{ts, tsx}', '**/src/**/*.{svg, svgr}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];

module.exports = config;
