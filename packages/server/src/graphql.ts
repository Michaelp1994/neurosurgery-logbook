import "reflect-metadata";
import {
  Context,
  APIGatewayProxyEvent,
  Callback,
  APIGatewayProxyResult,
} from "aws-lambda";
import { ApolloServer } from "apollo-server-lambda";
import { buildSchema, NonEmptyArray } from "type-graphql";
import resolvers from "./resolvers";
import { dataSource } from "./data-source";
import { authChecker, contextGenerator } from "./services/authChecker";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>
) {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  (global as any).schema =
    (global as any).schema ||
    (await buildSchema({
      resolvers,
      authChecker,
    }));
  const schema = (global as any).schema;
  const server = new ApolloServer({ schema, context: contextGenerator });
  return server.createHandler()(event, context, callback);

  // build TypeGraphQL executable schema
}
