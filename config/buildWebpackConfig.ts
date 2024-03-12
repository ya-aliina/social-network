import webpack from "webpack";
import path from "path";
import buildPlugings from "./buildPlugings";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {buildOptions} from "./types/config";

export default function buildWebpackConfig({mode, paths}: buildOptions){
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
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}

	return config
}