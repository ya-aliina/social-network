import webpack from 'webpack';
import buildPlugings from './buildPlugings';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { buildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: buildOptions) {
    const {
        mode,
        paths,
        port,
        isDev,
    } = options;
    const config: webpack.Configuration = {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugings(options),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };

    return config;
}
