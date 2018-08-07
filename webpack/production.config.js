const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./base.config');
const { isDebugEnabled } = require('./common');

const config = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
});

if (isDebugEnabled) {
  config.devtool = 'source-map';
}

module.exports = config;
