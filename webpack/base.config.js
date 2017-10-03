const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const {
  NODE_ENV = 'development',
  ANALYZE = false,
} = process.env;

const SOURCE_DIR = path.resolve(__dirname, '../source');
const BUILD_DIR = path.resolve(__dirname, '../build');

const config = {
  entry: [
    `${SOURCE_DIR}/index.js`,
  ],

  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    publicPath: '/',
    filename: 'app.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/svg+xml',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: `${SOURCE_DIR}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};

if (ANALYZE) {
  config.plugins = [
    ...config.plugins,
    new BundleAnalyzerPlugin(),
  ];
}

module.exports = config;
