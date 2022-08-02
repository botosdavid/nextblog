import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from "apollo-server-micro";
import mongoose from 'mongoose';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from '../../utils/resolvers';
import typeDefs from '../../utils/typeDefs';

const connectMongoDB = async () => mongoose.connect(process.env.MONGO_DB!);

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoDB();
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