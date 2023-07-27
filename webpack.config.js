const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/web.index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/web'),
    filename: 'boundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true
    })
  ],
  mode: 'development',
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  devServer:{
    contentBase: path.join(__dirname,'dist/web'),
    port:3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/app/ui/web/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.ts']
  },
  target: 'web'
}