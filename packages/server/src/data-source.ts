import "dotenv/config";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw Error("Enviroment variables not set up!");

const baseConfig = {
    type: "postgres",
    url: DATABASE_URL,
    entities: [__dirname + "/models/*.{ts,js}"],
    logging: ["error", "warn", "info"],
    maxQueryExecutionTime: 500,
    migrationsRun: true,
    migrations: [__dirname + "/migrations/*.{ts,js}"],
};

const devConfig = {
    ...baseConfig,
};

const productionConfig = {
    ...baseConfig,
    ssl: {
        rejectUnauthorized: false,
    },
};

export const dataSource = new DataSource(
    process.env.NODE_ENV === "production"
        ? (productionConfig as PostgresConnectionOptions)
        : (devConfig as PostgresConnectionOptions)
);
