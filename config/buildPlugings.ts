import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export default function buildPlugings():webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			filename: "index.[contenthash].html",
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin(),
	]
}