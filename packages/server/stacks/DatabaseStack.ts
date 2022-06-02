import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  cluster;
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create the Aurora DB cluster
    this.cluster = new sst.RDS(this, "NeuroDB", {
      engine: "postgresql10.14",
      defaultDatabaseName: process.env.DB_NAME || "myDb",
      scaling: {
        autoPause: true,
        minCapacity: "ACU_2",
        maxCapacity: "ACU_2",
      },
    });
    // Show the endpoint in the output
    this.addOutputs({
      SecretArn: this.cluster.secretArn,
      ClusterIdentifier: this.cluster.clusterIdentifier,
      ClusterArn: this.cluster.clusterArn,
    });
  }
}
