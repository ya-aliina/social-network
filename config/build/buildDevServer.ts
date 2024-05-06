import {buildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
export default function buildDevServer(port: number):DevServerConfiguration {
	return {
		port: port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}