const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge.strategy({
  entry: 'prepend',
})(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ],

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
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

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
});
