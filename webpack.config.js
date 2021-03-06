var path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['react', 'stage-1', 'es2015'], cacheDirectory: true}
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(woff|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
