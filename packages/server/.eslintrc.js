module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.html"],
            extends: ["plugin:@html-eslint/recommended"],
        },
        {
            files: ["*.ts", "*.tsx"],
            env: {
                node: true,
                es2021: true,
            },
            extends: [
                "eslint:recommended",
                "prettier",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@michaelp1994/typegraphql/recommended",
            ],
            rules: {
                "@michaelp1994/typegraphql/input-type-name": [
                    1,
                    {
                        caseSensitiveInputType: false,
                    },
                ],
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
            parser: "@graphql-eslint/eslint-plugin",
            plugins: ["@graphql-eslint"],
            parserOptions: {
                skipGraphQLConfig: true,
                schema: "./src/schema.graphql",
            },
            extends: "plugin:@graphql-eslint/schema-all",
            rules: {
                "@graphql-eslint/alphabetize": "off",
                "@graphql-eslint/no-typename-prefix": "off",
                "@graphql-eslint/require-field-of-type-query-in-mutation-result":
                    "off",
                "@graphql-eslint/input-name": [
                    "warn",
                    {
                        caseSensitiveInputType: false,
                        checkInputType: true,
                        checkQueries: true,
                    },
                ],
            },
        },
    ],
};
