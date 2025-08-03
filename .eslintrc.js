// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-redux", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-console": "warn",
    "react-redux/useSelector-prefer-selectors": "off",
    "simple-import-sort/imports": "warn",
    "no-duplicate-imports": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
