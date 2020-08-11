const rules = require.resolve('rules');

const config = {
  root: true,
  extends: ['airbnb', rules],
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

module.exports = config;
