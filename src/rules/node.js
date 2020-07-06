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
        'webpack*.js',
        '*.spec.js',
        '*.test(s?).js',
        '*.stor(y|es).js',
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
