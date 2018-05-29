const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./base.config');
const { isDebugEnabled } = require('../config');

const config = {
  ...baseConfig,

  mode: 'production',

  plugins: [
    ...baseConfig.plugins,
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
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
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
};

if (isDebugEnabled) {
  config.devtool = 'source-map';
}

module.exports = config;
