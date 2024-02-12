module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['error', 'double'],
    'eqeqeq': ['error', 'always'],
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    'no-shadow': 'off', 
    '@typescript-eslint/no-shadow': 'warn',
    'semi': ["error", "always"],
    'no-duplicate-imports': 'error'
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
}
