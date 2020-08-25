const rules = ['./src', './src/prettier'].map(require.resolve);

module.exports = {
  extends: rules,
};
