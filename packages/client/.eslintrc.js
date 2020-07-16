module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: [
      "error",
      2,
      { ignoredNodes: ["ConditionalExpression"], SwitchCase: 1 },
    ],
    quotes: [1, "single"],
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        tabs: false,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
