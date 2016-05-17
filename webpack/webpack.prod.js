'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const UglifyWebpack = webpack.optimize.UglifyJsPlugin;

module.exports = {
    debug: false,
    devtool: 'source-map',
    entry: {
        vendor: ['./src/app/scripts/vendor'],
        app: ['./src/app/scripts/bootstrap']
    },
    htmlLoader: {
        caseSensitive: true,
        customAttributeAssign: [/\)?\]?=/],
        customAttributeSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        minimize: true,
        removeAttributeQuotes: false
    },
    module: {
        loaders: [
            {
                loader: 'raw!sass',
                test: /\.scss$/
            },
            {
                loader: 'raw',
                test: /\.html$/
            },
            {
                exclude: /node_modules/,
                loader: 'ts',
                test: /\.ts$/
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: './src/app/index.html'
        }),
        new UglifyWebpack({
            beautify: false,
            comments: false,
            compress: {
                screw_ie8: true
            },
            mangle: {
                screw_i8: true,
                keep_fnames: true
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};