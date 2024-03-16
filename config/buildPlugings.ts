import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {buildPaths} from "./types/config";

export default function buildPlugings(paths: buildPaths):webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
	]
}