const rules = require.resolve('rules');

const config = {
  root: true,
  extends: ['airbnb-base', rules],
};

module.exports = config;
