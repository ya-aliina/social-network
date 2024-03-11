import path from "path";
import webpack from "webpack";
// import HtmlWebpackPlugin from 'html-webpack-plugin';
import buildPlugings from "./config/buildPlugings";
import buildLoaders from "./config/buildLoaders";

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		filename: 'index.[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	plugins: buildPlugings(),
	module: {
		rules: buildLoaders(),
	},
	resolve: ,
}

export default config
