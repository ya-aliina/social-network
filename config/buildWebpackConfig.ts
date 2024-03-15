import webpack from "webpack";
import path from "path";
import buildPlugings from "./buildPlugings";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {buildOptions} from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: buildOptions){
	const config: webpack.Configuration = {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			filename: 'index.[contenthash].js',
			path: options.paths.output,
			clean: true
		},
		plugins: buildPlugings(options.paths),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		devtool: options.isDev? 'inline-source-map': undefined,
		devServer: options.isDev? buildDevServer(options): undefined,
	}

	return config
}