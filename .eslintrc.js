module.exports = {
  env: {
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": [0]
  }
};
