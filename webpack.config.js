var webpack = require('webpack'),
    path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: [	
		'./dev/index.html',
		'./dev/scss/app.scss', 
		'./dev/js/app.js',
	],
	plugins: [
        new CopyPlugin([
            { from: 'dev/res', to: 'res' }
        ])
    ],
	output: {
		path: path.resolve(__dirname, 'dist/insights'),
		filename: 'insights-bundle.js',
	},
    module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'insights-bundle.css',
						},
					},
					{ 
						loader: 'extract-loader' 
					},
					{ 
						loader: 'css-loader' 
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['./node_modules']
						}
					}
				]
			},
			{
				test: /\.html$/,
				loader: "file-loader?name=[name].[ext]"
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
				},
			},
			{
				test: /\.woff/,
				loader: 'file-loader?prefix=font/'
			},
			{
				test: /\.ttf/,
				loader: 'file-loader?prefix=font/'
			}, 
			{
				test: /\.eot/,
				loader: 'file-loader?prefix=font/'
			}, 
			{
				test: /\.svg/,
				loader: 'file-loader?prefix=font/'
			}, 
			{
				test: /\.(jpe?g|png|gif)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=100000' 
			},
			{ test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" }
    	]
		
        
    }
};