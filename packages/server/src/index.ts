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
const graphqlPath = "/graphql";

export default async function (STATIC_LOCATION: string) {
    const PORT = process.env.PORT;
    if (!PORT) throw Error("Port is not properly configured in env variables.");
    const WEBSITE_URL = process.env.WEBSITE_URL;
    if (!WEBSITE_URL)
        throw Error("Website URL is not properly configured in env variables.");
    const app = express();
    const httpServer = http.createServer(app);
    //const CLIENT_BUILD = __dirname + "/public";
    const schema = await buildSchema({
        resolvers: [__dirname + "/resolvers/**/*.{ts,js}"],
        authChecker: authChecker,
        emitSchemaFile: {
            path: "./schema.graphql",
            sortedSchema: false,
        },
    });
    app.use(cors());
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    app.use(express.static(STATIC_LOCATION));

    await dataSource.initialize();
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: contextGenerator,
    });
    await server.start();
    server.applyMiddleware({ app, path: graphqlPath });
    app.get("*", (req, res) => {
        res.sendFile(STATIC_LOCATION + "/index.html");
    });
    httpServer.listen({ port: PORT });

    console.log(`🚀 Server ready at ${WEBSITE_URL}:${PORT}`);
}

// startApolloServer().catch((e) => {
//     console.log("Error:", e);
// });
