const rules = [
  './error',
  './import',
  './node',
  './practices',
  './promises',
  './style',
  './variable',
].map(require.resolve);

const config = {
  extends: rules,
  parserOptions: {
    parser: 'babel-eslint',
  },
};

module.exports = config;
