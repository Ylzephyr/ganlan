const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        dev: path.resolve(__dirname, '../src', 'App.tsx')
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: "file-loader",
            // },
            {
                test: /\.(gif|jpg|png|jpeg)$/,           // 解析图片
                loader: 'url-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, "../src/")
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
                dropConsole: true
            },
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true
    }
}