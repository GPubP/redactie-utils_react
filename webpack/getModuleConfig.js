const path = require('path');

const RedactionWebpackPlugin = require('@redactie/module-webpack-plugin');
const cssnano = require('cssnano');
const kebabCase = require('lodash.kebabcase');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getStyleLoaders = (cssLoaderOptions = { importLoaders: 1 }, preProcessor = '') => {
	const loaders = [
		'style-loader',
		{
			loader: 'css-loader',
			options: cssLoaderOptions,
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: () => [postcssPresetEnv(), cssnano({ preset: 'default' })],
			},
		},
	];

	if (preProcessor) {
		loaders.push(preProcessor);
	}

	return loaders;
};

module.exports = ({
	packageJSON,
	mode = 'production',
	mainEntryPath = path.resolve(process.cwd(), './public/index.tsx'),
	tsIncludes = [/public/],
	sassIncludes = [/public/],
	styleIncludes = [/public/],
	externals = {},
	outputPath = path.resolve(process.cwd(), 'dist'),
	definitions = {},
} = {}) => (env) => {
	const defaultConfig = {
		mode,
		entry: {
			[kebabCase(packageJSON.name)]: mainEntryPath,
		},
		performance: {
			hints: false,
		},
		module: {
			rules: [
				{
					test: /\.ts(x)?$/,
					use: 'ts-loader',
					include: tsIncludes,
				},
				{
					test: /\.css$/i,
					use: getStyleLoaders(),
					include: styleIncludes,
				},
				{
					test: /\.module\.s[ac]ss$/i,
					use: getStyleLoaders(
						{
							modules: true,
							importLoaders: 2,
						},
						'sass-loader'
					),
					include: sassIncludes,
				},
				{
					test: /\.s[ac]ss$/i,
					exclude: /\.module\.s[ac]ss$/i,
					use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
					include: sassIncludes,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			// add default plugins here
			new webpack.DefinePlugin({
				...definitions,
				BFF_MODULE_PUBLIC_PATH: JSON.stringify(
					`${kebabCase(packageJSON.name + packageJSON.version)}/dist/`
				),
			}),
		],
		externals: {
			react: 'react',
			formik: 'formik',
			ky: 'ky',
			yup: 'yup',
			ramda: 'ramda',
			rxjs: 'rxjs',
			moment: 'moment',
			'rxjs/operators': 'rxjs/operators',
			'@datorama/akita': '@datorama/akita',
			'react-dom': 'react-dom',
			'react-router-dom': 'react-router-dom',
			'@redactie/react-router-guards': '@redactie/react-router-guards',
			'@redactie/redactie-core': '@redactie/redactie-core',
			'@redactie/roles-rights-module': '@redactie/roles-rights-module',
			'@redactie/utils': '@redactie/utils',
			'@acpaas-ui/react-components': '@acpaas-ui/react-components',
			'@acpaas-ui/react-editorial-components': '@acpaas-ui/react-editorial-components',
			...externals,
		},
		output: {
			filename: '[name].umd.js',
			path: outputPath,
			libraryTarget: 'umd',
		},
	};

	if (env.analyse) {
		return {
			...defaultConfig,
			plugins: [
				...defaultConfig.plugins,
				new BundleAnalyzerPlugin(),
				new webpack.SourceMapDevToolPlugin({
					filename: '[name].umd.js.map',
					publicPath: `${kebabCase(packageJSON.name + packageJSON.version)}/dist/`,
				}),
			],
		};
	}

	if (env.prod) {
		return {
			...defaultConfig,
			plugins: [
				...defaultConfig.plugins,
				new RedactionWebpackPlugin({
					moduleName: packageJSON.name,
				}),
				new webpack.SourceMapDevToolPlugin({
					filename: '[name].umd.js.map',
					publicPath: `${kebabCase(packageJSON.name + packageJSON.version)}/dist/`,
				}),
			],
		};
	}

	return defaultConfig;
};
