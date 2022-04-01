import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { buildSchema } from "type-graphql";
import { authChecker, contextGenerator } from "./services/authChecker";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";
import { dataSource } from "./data-source";
import path from "path";
import { exit } from "process";
const graphqlPath = "/graphql";

async function startServer() {
    const PORT = process.env.PORT;
    if (!PORT) throw Error("Port is not properly configured in env variables.");
    const WEBSITE_URL = process.env.WEBSITE_URL;
    if (!WEBSITE_URL)
        throw Error("Website URL is not properly configured in env variables.");
    const app = express();
    const httpServer = http.createServer(app);
    const schema = await buildSchema({
        resolvers: [path.join(__dirname, "resolvers", "**", "*.{ts,js}")],
        authChecker: authChecker,
        emitSchemaFile: {
            path: path.join(__dirname, "schema.graphql"),
            sortedSchema: false,
        },
    });
    app.use(cors());
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
        app.use(
            express.static(path.join(__dirname, "..", "..", "web", "dist"))
        );
        app.get("*", (req, res) => {
            res.sendFile(
                path.join(__dirname, "..", "..", "web", "dist", "index.html")
            );
        });
    }

    await dataSource.initialize();
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: contextGenerator,
    });
    await server.start();
    server.applyMiddleware({ app, path: graphqlPath });

    httpServer.listen({ port: PORT });

    console.log(`🚀 Server ready at ${WEBSITE_URL}:${PORT}`);
}

startServer().catch((e) => {
    console.log("Error:", e);
    exit(1);
});
