const postcssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');
const nesting = require('postcss-nesting');
const customProperties = require('postcss-custom-properties');
const calc = require('postcss-calc');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const webpackConfig = require('./webpack.config');

module.exports = {
  plugins: [
    postcssImport({
      resolve: createResolver({
        alias: webpackConfig.resolve.alias,
      }),
    }),
    nesting(),
    customProperties(),
    calc(),
    flexbugsFixes(),
    autoprefixer(),
    csso(),
  ],
};
