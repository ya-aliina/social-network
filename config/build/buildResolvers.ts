import webpack from "webpack";
import {buildPaths} from "./types/config";

export default function buildResolvers(paths: buildPaths):webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}