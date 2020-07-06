module.exports = {
  rules: {
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: [
        '.*.js',
        '*.env*.js',
        '*.config*.js',
        'webpack*.js',
        '*.spec.js',
        '*.test(s?).js',
        '*.stor(y|es).js',
        'webpack*/*',
        'build*/*',
        'env*/*',
      ],
      rules: {
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
