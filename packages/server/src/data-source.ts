import "dotenv/config";
import path from "path";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw Error("Enviroment variables not set up!");

const baseConfig = {
    type: "postgres",
    url: DATABASE_URL,
    entities: [path.join(__dirname, "models", "*.{ts,js}")],
    logging: ["error", "warn", "info"],
    maxQueryExecutionTime: 500,
    migrationsRun: true,
    migrations: [path.join(__dirname, "migrations", "*.{ts,js}")],
};

const sslConfig = {
    ...baseConfig,
    ssl: {
        rejectUnauthorized: false,
    },
};

export const dataSource = new DataSource(
    process.env.DATABASE_SSL === "0"
        ? (baseConfig as PostgresConnectionOptions)
        : (sslConfig as PostgresConnectionOptions)
);
