const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'src/public/index.html'),
      favicon: path.resolve(__dirname, '..', 'src/public/favicon/favicon.ico'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new WebpackPwaManifest({
      name: 'Likia Sun',
      short_name: 'Likia',
      description: 'Introduction of Taiwan full-stack-developer - Likia',
      'theme-color': '#242424',
      icons: [
        {
          src: path.resolve(
            __dirname,
            '..',
            'src/public/favicon/favicon-16x16.png'
          ),
          size: '16x16',
        },
        {
          src: path.resolve(
            __dirname,
            '..',
            'src/public/favicon/favicon-32x32.png'
          ),
          size: '32x32',
        },
        {
          src: path.resolve(
            __dirname,
            '..',
            'src/public/favicon/apple-touch-icon.png'
          ),
          size: '180x180',
        },
        {
          src: path.resolve(
            __dirname,
            '..',
            'src/public/favicon/android-chrome-192x192.png'
          ),
          size: '192x192',
        },
        {
          src: path.resolve(
            __dirname,
            '..',
            'src/public/favicon/android-chrome-512x512.png'
          ),
          size: '512x512',
        },
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
    }),
    new RobotstxtPlugin({
      filePath: path.resolve(__dirname, '..', 'src/public/robots.txt'),
    }),
  ],
  performance: false,
};
