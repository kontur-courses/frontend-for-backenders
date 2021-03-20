const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('src','index'),
    output: {
        path: path.resolve('build'),
        publicPath: 'build/',
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            process: "process/browser"
        }
    },
    devServer: {
        writeToDisk: true
    },
}
