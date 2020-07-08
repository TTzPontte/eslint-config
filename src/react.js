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
  extends: ['airbnb', ...rules],
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
  },
};
