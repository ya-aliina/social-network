export type buildMode = 'production' | 'development';

export interface buildPaths {
	entry: string,
	output: string,
	html: string
}

export interface buildOptions {
	mode: buildMode,
	paths: buildPaths,
	port: number,
}

export interface buildEnv {
	mode: buildMode,
	port: number
}

