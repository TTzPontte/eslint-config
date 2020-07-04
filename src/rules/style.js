module.exports = {
  rules: {
    'max-len': 'off',
    camelcase: 'off',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'consistent-this': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayPattern: true,
          ObjectPattern: true,
        },
      },
    ],
  },
};
