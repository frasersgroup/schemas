module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    "json",
  ],
  extends: [
    'airbnb/base',
    'eslint:recommended',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    semi: ['error', 'never'],
  },
  settings: {},
}
