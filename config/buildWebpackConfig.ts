import webpack from "webpack";
import path from "path";
import buildPlugings from "./buildPlugings";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {buildOptions} from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: buildOptions){
	const {mode, paths, port, isDev} = options
	const config: webpack.Configuration = {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: 'index.[contenthash].js',
			path: paths.output,
			clean: true
		},
		plugins: buildPlugings(paths),
		module: {
			rules: buildLoaders(isDev),
		},
		resolve: buildResolvers(),
		devtool: isDev? 'inline-source-map': undefined,
		devServer: isDev? buildDevServer(port): undefined,
	}

	return config
}