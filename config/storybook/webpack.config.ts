import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { buildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: buildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule | '...') => {
        if (rule === '...') return rule;

        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }

        return rule;
    });
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
