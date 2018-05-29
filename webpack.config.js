const { NODE_ENV = 'production' } = process.env;

module.exports = require(`./webpack/${NODE_ENV}.config`);
