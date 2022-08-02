import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Query {
        getPosts: [Post]
    }
    type Post { 
        title: String,
        description: String,
        image: String
    }
    type Mutation { 
        addPost(title: String!, description: String!, image: String!): String!
    }
`

export default typeDefs;