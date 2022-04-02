const path = require("path");
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      rules: {
        "prettier/prettier": "error",
      },

      parserOptions: {
        skipGraphQLConfig: true,
        schema: path.join(__dirname, "schema.graphql"),
        operations: path.join(__dirname, "src", "services", "*.graphql"),
      },
    },
  ],
};
