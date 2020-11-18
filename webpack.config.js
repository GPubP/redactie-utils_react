const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		main: './public/index.ts',
		workers: './public/workers/index.ts',
	},
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
		new copyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './webpack'),
					to: path.resolve(__dirname, 'dist/webpack'),
				},
			],
		}),
	],
	externals: {
		classnames: 'classnames',
		formik: 'formik',
		react: 'react',
		'react-dom': 'react-dom',
		'react-router-dom': 'react-router-dom',
		'@acpaas-ui/react-components': '@acpaas-ui/react-components',
		'@redactie/redactie-core': '@redactie/redactie-core',
		'@redactie/react-router-guards': '@redactie/react-router-guards',
		'@datorama/akita': '@datorama/akita',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'redactie-utils',
		libraryTarget: 'umd',
	},
};
