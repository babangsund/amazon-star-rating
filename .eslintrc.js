module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
