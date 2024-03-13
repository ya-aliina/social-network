import buildWebpackConfig from "./config/buildWebpackConfig";
import {buildMode, buildOptions, buildPaths} from "./config/types/config";
import path from "path";
import webpack from "webpack";

const mode: buildMode = 'development';
const port: number = 3000;
const isDev: boolean = mode === 'development';


const paths:buildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}

const options: buildOptions = {
	mode,
	paths,
	port
}

const config:webpack.Configuration = buildWebpackConfig(options);
export default config;
