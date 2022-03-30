module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  ignorePatterns: ["**/*.generated.ts", "**/*.graphql"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["vue"],
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
        // "@graphql-eslint/match-document-filename": 0,
      },
    },
  ],
};
