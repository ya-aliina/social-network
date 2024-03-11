import webpackConfig from "../webpack.config";
import loader from "ts-loader";
import webpack from "webpack";

export default function buildLoaders():webpack.RuleSetRule[] {
	return [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
	]
}