import buildWebpackConfig from "./config/buildWebpackConfig";
import {buildEnv, buildMode, buildOptions, buildPaths} from "./config/types/config";
import path from "path";
import webpack from "webpack";

export default (env: buildEnv) => {

	const mode: buildMode = env.mode || 'development';
	const port: number = env.port || 3000;
	const isDev: boolean = mode === 'development';

	const paths:buildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const options: buildOptions = {
		mode,
		paths,
		port,
		isDev
	}

	const config:webpack.Configuration = buildWebpackConfig(options);

	return config;
}


// export default config;
