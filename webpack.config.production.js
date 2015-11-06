var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['react', 'stage-1', 'es2015'], cacheDirectory: true}
            },
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
