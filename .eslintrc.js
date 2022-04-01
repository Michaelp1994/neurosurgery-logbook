module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parserOptions: {
    sourceType: "module",
  },
  // extends: ["eslint:recommended"],
  // ignorePatterns: ["**/*.generated.ts", "**/*.graphql"],
  // parserOptions: {
  //   ecmaVersion: 2020,
  // },
  extends: ["eslint:recommended"],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: ["**/*.generated.ts", "**/*.config.ts"],
      env: {
        node: true,
        es2021: true,
        browser: true,
      },
      extends: [
        "eslint:recommended",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "property",
            format: ["strictCamelCase"],
          },
          {
            selector: "class",
            format: ["StrictPascalCase"],
          },
        ],
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        skipGraphQLConfig: true,
        schema: "../server/schema.graphql",
        operations: "src/**/*.graphql",
      },
      rules: {
        "prettier/prettier": "error",
      },
    },
    {
      files: ["*.vue"],
      extends: [
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
      ],
      plugins: ["vue"],
      rules: {
        "vue/component-tags-order": [
          "error",
          {
            order: ["script", "template", "style"],
          },
        ],
      },
    },
  ],
};
