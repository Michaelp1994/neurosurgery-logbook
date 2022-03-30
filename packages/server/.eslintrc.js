module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    overrides: [
        {
            files: ["*.graphql"],
            parserOptions: {
                schema: "./schema.graphql",
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
                        checkInputType: true,
                        checkQueries: true,
                    },
                ],
            },
        },
        {
            files: ["*.ts", "*.tsx"], // Your TypeScript files extension
            extends: [
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
                // include: ["src/**/*.ts"],
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    ],
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:@michaelp1994/typegraphql/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        // "@michaelp1994/typegraphql/input-name": 1,
        "@michaelp1994/typegraphql/input-type-name": [
            1,
            {
                caseSensitiveInputType: false,
            },
        ],
        // "@michaelp1994/typegraphql/require-description": 1,
    },
    ignorePatterns: ["src/**/*.test.ts"],
};
