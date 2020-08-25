const config = {
  extends: ['plugin:jest/all'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};

module.exports = config;
