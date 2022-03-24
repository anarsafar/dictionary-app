// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: [
        './src/js/main.js',
        './src/js/domElements.js',
        './src/js/clearForm.js',
        './src/js/ajax.js',
        './src/js/displayResponse/displayResponse.js',
        './src/js/displayResponse/displayBodyData/displayBodyData.js',
        './src/js/displayResponse/displayHeaderData.js',
        './src/js/displayResponse/displayBodyData/displayCards.js',
        './src/js/displayResponse/displayBodyData/groupDefinitions.js',
        './src/js/displayResponse/displayBodyData/modifyDefinitions.js'
    ],
    output: {
        filename: 'main,[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dictionary App',
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};
