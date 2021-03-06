const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({
	entry = './public/lib/workers/index.ts',
	workerFilter = /\.worker\.ts$/,
	clean = true,
	outputPath = path.resolve(process.cwd(), 'dist'),
	mode = 'production',
} = {}) => ({
	entry,
	mode,
	performance: {
		hints: false,
	},
	module: {
		rules: [
			{
				test: workerFilter,
				use: [
					{
						loader: 'worker-loader',
						options: {
							filename: '[name].umd.js',
						},
					},
				],
				include: [/public/],
			},
			{
				test: /\.ts(x)?$/,
				use: 'ts-loader',
				include: [/public/],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: clean ? [new CleanWebpackPlugin()] : [],
	output: {
		path: outputPath,
		libraryTarget: 'umd',
	},
});
