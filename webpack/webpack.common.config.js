var webpack = require('webpack');
var path = require('path');
var parentDir = path.resolve(__dirname, '../');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        }]
    },
    output: {
        path: parentDir + '/dist/',
        filename: 'bundle.js',
        publicPath: "http://localhost:3000/app/"
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.SourceMapDevToolPlugin()
    ],
    devServer: {
        publicPath: "http://localhost:3000/app/",
        hot: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../", "app"),
        port: 3000
    }
}