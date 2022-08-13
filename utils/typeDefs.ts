import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Query {
        getPosts: [Post]
        getPost(id: String): Post
        getUserPosts(id: String): [Post]
    }
    type User {
        name: String,
        email: String,
        image: String,
    }
    type Post { 
        _id: String,
        title: String,
        description: String,
        image: String,
        createdAt: String,
        category: String,
        userId: User
    }
    type Mutation { 
        addPost(title: String!, description: String!, image: String!, category: String!, userId: String!): String!
    }
`

export default typeDefs;