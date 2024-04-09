module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'on',
    'printWidth': 120,
    'eslint.autoFixOnSave': 'true',
    'eslintIntegration': 'true',
    'bracketSpacing': 'true',
    'trailingComma': 'all',
    'endOfLine': 'auto',
  },
}