const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const config = [
    ...compat.extends('airbnb', 'airbnb/hooks'),
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
            'max-len': ['warn', 120],
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];

module.exports = config;
