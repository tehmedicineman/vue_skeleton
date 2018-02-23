const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true // added for HMR
	},
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]), // clears the dist folder before building
		new HtmlWebpackPlugin({ // builds the html file for us with the output file(s) in it
			title: 'Output Management',
			template: 'src/index.ejs'
		}),
		new webpack.NamedModulesPlugin(), // added for HMR, causes relative path of module to be displayed for HMR
		new webpack.HotModuleReplacementPlugin() // added for HMR
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
};