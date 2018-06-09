const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = {
    mode: 'development',
    entry: path.resolve(__dirname,'index.js'),
    output :{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: {loader: "babel-loader", options:{presets:["es2015"]}} },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ]
}

module.exports = config