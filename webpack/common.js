const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  sourceDir: path.resolve(__dirname, '../source'),
  buildDir: path.resolve(__dirname, '../build'),
  nodeEnv,
  isDebugEnabled: Boolean(process.env.DEBUG_ENABLED) || nodeEnv === 'development',
};
