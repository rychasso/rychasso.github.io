module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // eslint-config-prettier -> the config to override rules of eslint for better work with eslint
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier', // eslint-plugin-prettier -> Allow eslint to use prettier
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error', // enable plugin
  },
};
