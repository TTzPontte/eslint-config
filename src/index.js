const rules = [
  './rules/error',
  './rules/import',
  './rules/node',
  './rules/practices',
  './rules/promises',
  './rules/style',
  './rules/variable',
].map(require.resolve);

module.exports = {
  root: true,
  extends: ['airbnb-base', ...rules],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
