module.exports = {
  extends: [
    '../eslint-config-airbnb-base/rules/best-practices',
    '../eslint-config-airbnb-base/rules/errors',
    '../eslint-config-airbnb-base/rules/node',
    '../eslint-config-airbnb-base/rules/style',
    '../eslint-config-airbnb-base/rules/variables',
    '../eslint-config-airbnb-base/rules/es6',
    '../eslint-config-airbnb-base/rules/imports',
    '../eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'no-warning-comments': 'warn',
    'no-use-before-define': ['error', { functions: false }],
    'no-console': ['warn', { allow: ['warn'] }]
  }
};
