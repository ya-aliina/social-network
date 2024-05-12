export type buildMode = 'production' | 'development';

export interface buildPaths {
    entry: string,
    output: string,
    html: string
    src: string
}

export interface buildOptions {
    mode: buildMode,
    paths: buildPaths,
    port: number,
    isDev: boolean;
}

export interface buildEnv {
    mode: buildMode,
    port: number,
    isEslintFlat: boolean,
}
