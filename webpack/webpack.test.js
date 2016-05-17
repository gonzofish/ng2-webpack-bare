'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            {
                loader: 'tslint',
                test: /.ts$/
            }
        ],
        loaders: [
            {
                loader: 'raw',
                test: /\.(html|scss)$/
            },
            {
                exclude: /node_modules/,
                loader: 'ts',
                test: /\.ts$/
            }
        ],
        noParse: [
            path.join('node_modules', 'angular2', 'bundles')
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    }
};