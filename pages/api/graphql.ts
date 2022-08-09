import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from "apollo-server-micro";
import { connectMongoose } from '../../utils/mongodb';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from '../../utils/resolvers';
import typeDefs from '../../utils/typeDefs';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose();
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
}
  
export const config = {
    api: {
        bodyParser: false,
    },
};