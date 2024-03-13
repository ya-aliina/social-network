import {buildOptions} from "./types/config";
import {Configuration as DevServerConfig} from 'webpack-dev-server';
export default function buildDevServer(options: buildOptions):DevServerConfig{
	return {
		port: 9000,
		open: true
	}
}