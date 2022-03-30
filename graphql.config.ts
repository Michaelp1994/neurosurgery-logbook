// import type { IGraphQLConfig } from "graphql-config";
// import type { Config } from "@graphql-codegen/cli";

const config = {
  schema: "./server/schema.graphql",
  documents: "./web/src/services/**/*.graphql",
  watch: ["web/src/**/*.graphql", "server/src/**/*.ts", "my-plugin.js"],
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:4000/graphql",
      },
    },
    codegen: {
      generates: {
        "web/src/services/types.generated.ts": {
          config: {
            flattenGeneratedTypes: true,
            scalars: {
              ID: "number | string",
            },
            namingConvention: {
              default: "change-case#pascalCase",
              enumValues: "keep",
            },
          },
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-vue-urql",
          ],
        },
        // "web/src/services/urql.ts": {
        //   preset: "import-types",
        //   presetConfig: {
        //     // extension: ".generated.ts",
        //     // baseTypesPath: "types.ts",
        //     typesPath: "./types",
        //   },
        //   config: {
        //     // importOperationTypesFrom: "types",
        //     scalars: {
        //       ID: "number | string",
        //     },
        //     namingConvention: {
        //       default: "change-case#pascalCase",
        //       enumValues: "keep",
        //     },
        //   },
        //   plugins: [],
        // },
      },
    },
  },
};

export default config;
