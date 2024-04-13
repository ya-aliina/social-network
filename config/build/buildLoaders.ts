import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildLoaders(isDev: boolean):webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev? "style-loader": MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) => resourcePath.includes('.module'),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:5]"
					},
				}
			},
			"sass-loader",
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		svgLoader,
		typescriptLoader,
		cssLoader
	]
}