module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: [
      'error',
      2,
      { ignoredNodes: ['ConditionalExpression'], SwitchCase: 1 }
    ],
    quotes: [1, 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        tabs: false
      }
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'max-len': [2, 140, 4, { ignoreComments: true, ignoreUrls: true }],

    'react/jsx-curly-spacing': ['error', 'never'],
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 5 }],
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/no-children-prop': 0,

    'jsx-a11y/no-static-element-interactions': 0,

    'arrow-parens': ['error', 'always'],
    'prefer-rest-params': 0,
    'padded-blocks': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,

    // Overriding the restricted syntax list, because we want to allow for-of statements.
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
