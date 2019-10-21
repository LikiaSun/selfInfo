const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  entry: [
    'webpack-dev-server/client?http://senlima.local:9000',
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
});
