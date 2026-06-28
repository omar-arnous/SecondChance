module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },

  extends: ["standard"],

  parserOptions: {
    ecmaVersion: "latest",
  },

  rules: {
    // No semicolons
    semi: ["error", "never"],

    // Single quotes only
    quotes: ["error", "single"],

    // 2-space indentation
    indent: ["error", 2],

    // Require === instead of ==
    eqeqeq: ["error", "always"],

    // No multiple spaces
    "no-multi-spaces": "error",

    // No unused variables
    "no-unused-vars": "warn",

    // No console logs in production (warn only for labs)
    "no-console": "warn",
  },
};
