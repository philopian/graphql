import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schemas/type-defs";
import resolvers from "./schemas/resolvers";

const PORT = 3000;
const app = express();

const graphqlServer = new ApolloServer({ typeDefs, resolvers });
graphqlServer.start().then((res) => {
  graphqlServer.applyMiddleware({ app });
  app.listen({ port: 3000 }, () => console.log(`Now browse to http://localhost:${PORT}${graphqlServer.graphqlPath}`));
});
