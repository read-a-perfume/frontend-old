module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'airbnb-base', // or airbnb
    'plugin:react/recommended', // eslint-plugin-react 설치한 경우
    'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y 설치한 경우
    'plugin:import/errors', // eslint-plugin-import 설치한 경우
    'plugin:import/warnings', // eslint-plugin-import 설치한 경우
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
