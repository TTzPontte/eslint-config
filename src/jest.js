const rules = require.resolve('rules');

const config = {
  extends: ['plugin:jest/all', rules],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};

module.exports = config;
