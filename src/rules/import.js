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
        'gulpfile.js',
        'webpack*.js',
        '*.spec.js',
        '*.test.js',
        '*.stories.js',
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
