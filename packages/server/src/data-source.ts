import { DataSource } from "typeorm";
import models from "./models";

export const dataSource = new DataSource({
  type: "aurora-postgres",
  region: process.env.AWS_REGION || "eu-central-1",
  database: process.env.DB_NAME || "",
  secretArn: process.env.CLUSTER_SECRET_ARN || "",
  resourceArn: process.env.CLUSTER_ARN || "",
  entities: models,
  migrations: ["migrations/*.ts"],
  logging: ["error", "warn"],
});
