import ApiStack from "./ApiStack";
import DatabaseStack from "./DatabaseStack";

import * as sst from "@serverless-stack/resources";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
  });
  const databaseStack = new DatabaseStack(app, "database-stack");
  const apiStack = new ApiStack(app, "api-stack", {
    cluster: databaseStack.cluster,
  });
  // Add more stacks
}
