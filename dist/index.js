"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const http_1 = __importDefault(require("http"));
const type_graphql_1 = require("type-graphql");
const authChecker_1 = require("./services/authChecker");
const cors_1 = __importDefault(require("cors"));
const graphql_upload_1 = require("graphql-upload");
const data_source_1 = require("./data-source");
const graphqlPath = "/graphql";
async function startApolloServer() {
    const PORT = process.env.PORT;
    if (!PORT)
        throw Error("Port is not properly configured in env variables.");
    const WEBSITE_URL = process.env.WEBSITE_URL;
    if (!WEBSITE_URL)
        throw Error("Website URL is not properly configured in env variables.");
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [__dirname + "/resolvers/**/*.{ts,js}"],
        authChecker: authChecker_1.authChecker,
        emitSchemaFile: {
            path: "./schema.graphql",
            sortedSchema: false,
        },
    });
    app.use((0, cors_1.default)());
    app.use((0, graphql_upload_1.graphqlUploadExpress)({ maxFileSize: 10000000, maxFiles: 10 }));
    app.use(express_1.default.static(__dirname + "/public"));
    await data_source_1.dataSource.initialize();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        context: authChecker_1.contextGenerator,
    });
    await server.start();
    server.applyMiddleware({ app, path: graphqlPath });
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/public/" + "index.html");
    });
    httpServer.listen({ port: PORT });
    console.log(`🚀 Server ready at ${WEBSITE_URL}:${PORT}`);
}
startApolloServer().catch((e) => {
    console.log("Error:", e);
});
//# sourceMappingURL=index.js.map