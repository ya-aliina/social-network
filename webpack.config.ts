import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { buildEnv, buildMode, buildPaths } from './config/build/types/config';

export default (env: buildEnv) => {
    const mode: buildMode = env.mode || 'development';
    const port: number = env.port || 3000;
    const isDev: boolean = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const paths:buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config:webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        port,
        isDev,
        apiUrl,
    });
    return config;
};
