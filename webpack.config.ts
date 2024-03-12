import buildWebpackConfig from "./config/buildWebpackConfig";
import {buildOptions, buildPaths} from "./config/types/config";
import path from "path";
import webpack from "webpack";

const paths:buildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}

const options: buildOptions = {
	mode: "development",
	paths: paths
}

const config:webpack.Configuration = buildWebpackConfig(options);
export default config;
