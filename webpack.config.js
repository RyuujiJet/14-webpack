// development 使用JS生成style标签
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'development',
  // entry: './src/index.js',
  // output: {
  //   filename: '[name].[contenthash].js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  // plugins: [
  //   new HtmlWebpackPlugin(),
  // ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}