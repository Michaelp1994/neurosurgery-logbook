"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL)
    throw Error("Enviroment variables not set up!");
const ssl = process.env.NODE_ENV === "development"
    ? undefined
    : {
        rejectUnauthorized: false,
    };
exports.dataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=data-source.js.map