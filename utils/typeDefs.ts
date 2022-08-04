import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Query {
        getPosts: [Post]
    }
    type Post { 
        _id: String,
        title: String,
        description: String,
        image: String,
        createdAt: String,
        category: String,
    }
    type Mutation { 
        addPost(title: String!, description: String!, image: String!): String!
    }
`

export default typeDefs;