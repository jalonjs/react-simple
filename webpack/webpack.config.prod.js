var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.jsx"
    },
    output: {
        path: './dist',
        filename: "[name]_[hash:8].js"
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=3000&name=image/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style_[hash:8].css'),
        new webpack.BannerPlugin('This file is created by Jalon')
    ]
}