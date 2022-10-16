// production 使用CSS抽成文件
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  // entry: './src/index.js',
  // output: {
  //   filename: '[name].[contenthash].js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    ...base.plugins,
    new MiniCssExtractPlugin(
      {
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false
      }
    )
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  }
}