const path = require('path');

module.exports = {
  sourceDir: path.resolve(__dirname, './source'),
  buildDir: path.resolve(__dirname, './build'),
  isDebugEnabled: Boolean(process.env.DEBUG_ENABLED),
};
