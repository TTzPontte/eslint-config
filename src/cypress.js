const rules = require.resolve('./rules');

const config = {
  extends: ['plugin:cypress/recommended', rules],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'require-data-selectors': 'error',
  },
};

module.exports = config;
