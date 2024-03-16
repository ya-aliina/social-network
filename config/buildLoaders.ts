import webpack from "webpack";

export default function buildLoaders():webpack.RuleSetRule[] {

	const saasLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			"style-loader",
			"css-loader",
			"sass-loader",
		],
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		tsLoader,
		saasLoader
	]
}