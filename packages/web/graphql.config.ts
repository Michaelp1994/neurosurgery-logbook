import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "./schema.graphql",
  documents: "./src/services/*.graphql",
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:4000/graphql",
      },
    },
    // codegen: {
    //   watch: ["src/**/*.graphql", "server/src/**/*.ts"],
    //   generates: {
    //     "web/src/services/types.generated.ts": {
    //       config: {
    //         flattenGeneratedTypes: true,
    //         scalars: {
    //           ID: "number | string",
    //         },
    //         namingConvention: {
    //           default: "change-case#pascalCase",
    //           enumValues: "keep",
    //         },
    //       },
    //       plugins: [
    //         "typescript",
    //         "typescript-operations",
    //         "typescript-vue-urql",
    //       ],
    //     },
    //   },
    // },
  },
};

export default config;
