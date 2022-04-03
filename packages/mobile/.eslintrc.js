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
  ignorePatterns: ["**/*.generated.ts"],
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
