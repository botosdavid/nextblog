import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Query {
        getPosts: [Post]
        getPost(id: String): Post
    }
    type Post { 
        _id: String,
        title: String,
        description: String,
        image: String,
        createdAt: String,
        category: String,
        authoremail: String
    }
    type Mutation { 
        addPost(title: String!, description: String!, image: String!, category: String!): String!
    }
`

export default typeDefs;