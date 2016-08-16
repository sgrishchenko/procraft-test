var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function _path(p) {
    return path.join(__dirname, p);
}

module.exports = {
    entry: ['babel-polyfill', 'script.js'],

    resolve: {
        modulesDirectories: ['.', 'node_modules'],
        alias: {
            'jquery': _path('node_modules/jquery/dist/jquery'),
            'inputmask.dependencyLib': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib.jquery'),
            'inputmask' : _path('node_modules/jquery.inputmask/dist/inputmask/inputmask'),
            'jquery.inputmask': _path('node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask'),
            'inputmask.phone.extensions': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.phone.extensions'),
            'inputmask.phone.codes': _path('node_modules/jquery.inputmask/extra/phone-codes/phone-codes.js')
        }
    },

    output: {
        path: 'dist',
        filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.eot$/,
                loader: 'file-loader'
            },
            {
                test: /phone-codes\.js$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': process.env.NODE_ENV || JSON.stringify('production')
            }
        })
    ]
};