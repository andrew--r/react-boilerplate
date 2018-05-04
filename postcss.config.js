const createResolver = require('postcss-import-webpack-resolver');
const webpackConfig = require('./webpack.config');

module.exports = {
  plugins: {
    'postcss-import': {
      resolve: createResolver({
        alias: webpackConfig.resolve.alias,
      }),
    },
    'postcss-nesting': {},
    'postcss-custom-properties': {
      preserve: false,
    },
    'postcss-calc': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: {},
    'postcss-csso': {},
  },
};
