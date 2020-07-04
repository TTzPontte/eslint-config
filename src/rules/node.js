module.exports = {
  rules: {},
  env: {
    node: true,
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
        'global-require': 'off',
      },
    },
  ],
};
