import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
