import "dotenv/config";
import { DataSource } from "typeorm";
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw Error("Enviroment variables not set up!");
const ssl =
    process.env.NODE_ENV === "development"
        ? undefined
        : {
              rejectUnauthorized: false,
          };
export const dataSource = new DataSource({
    type: "postgres",
    url: DATABASE_URL,
    entities: [__dirname + "/models/*.{ts,js}"],
    //synchronize: true,
    //logging: true,
    logging: ["error", "warn", "info"],
    maxQueryExecutionTime: 500,
    ssl,
    migrations: [__dirname + "/migrations/*.{ts,js}"],
});
