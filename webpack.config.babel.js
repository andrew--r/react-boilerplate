const { NODE_ENV = 'development' } = process.env;

module.exports = require(`./webpack/${NODE_ENV}.config`);
