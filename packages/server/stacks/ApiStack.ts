import * as sst from "@serverless-stack/resources";
import { GraphQLApiProps } from "@serverless-stack/resources";

export default class ApiStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: any) {
    super(scope, id, props);

    // Create the Graphql API
    const api = new sst.GraphQLApi(this, "Api", {
      server: {
        handler: "src/graphql.handler",
        timeout: 3,
      },
      defaults: {
        function: {
          permissions: [props.cluster],
          bundle: {
            esbuildConfig: {
              plugins: "config/esbuild.js",
            },
          },
          environment: {
            APP_ROOT_PATH: process.env.APP_ROOT_PATH || "./",
            JWT_SECRET: process.env.JWT_SECRET || "mySecret",
            CAPTCHA_SECRET_KEY: process.env.CAPTCHA_SECRET_KEY || "",
            JWT_EXPIRY: process.env.JWT_EXPIRY || "1d",
            DB_NAME: process.env.DB_NAME || "MyDb",
            CLUSTER_ARN: props.cluster.clusterArn,
            CLUSTER_SECRET_ARN: props.cluster.secretArn,
          },
        },
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
