module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.1' } },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
  },
}
