import {buildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
export default function buildDevServer(options: buildOptions):DevServerConfiguration {
	return {
		port: options.port,
		open: true
	}
}