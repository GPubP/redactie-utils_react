const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './public/index.ts',
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [postcssPresetEnv(), cssnano({ preset: 'default' })],
						},
					},
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		// clean dist folder before every build
		new CleanWebpackPlugin(),
		// Uncomment this line to analyse your bundle
		// new BundleAnalyzerPlugin(),
	],
	externals: {
		classnames: 'classnames',
		formik: 'formik',
		react: 'react',
		'react-dom': 'react-dom',
		'react-router-dom': 'react-router-dom',
		'@acpaas-ui/react-components': '@acpaas-ui/react-components',
		'@datorama/akita': '@datorama/akita',
	},
	output: {
		filename: 'redactie-utils.umd.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
	},
};
