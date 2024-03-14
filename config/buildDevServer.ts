import {buildOptions} from "./types/config";
import {Configuration as DevServerConfig} from 'webpack-dev-server';
export default function buildDevServer(options: buildOptions):DevServerConfig {
	return {
		port: options.port,
		open: true
	}
}