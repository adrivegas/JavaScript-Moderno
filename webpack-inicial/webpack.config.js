const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {

    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            },
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        })

    ]
}