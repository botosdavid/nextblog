import type { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from "apollo-server-micro";
import mongoose from 'mongoose';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import Post from '../../models/Post';

const connectMongoDB = async () => mongoose.connect(process.env.MONGO_DB!);

const typeDefs = gql`
    type Query {
        getPosts: [Post]
    }
    type Post { 
        title: String,
        description: String
    }
`
const resolvers = {
    Query: {
      getPosts: async () => {
        return await Post.find({});
      },
    },
  };

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