"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "node/no-unsupported-features/es-syntax": [0],
  },
};
