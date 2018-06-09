const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname,'src/js/index.js'),
      precios: path.resolve(__dirname,'src/js/precios.js'),
      contacto: path.resolve(__dirname,'src/js/contacto.js')
    },
    output :{
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}

module.exports = config