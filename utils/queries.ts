import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    getPosts {
      title
      description
      image
      _id
      createdAt
      category
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($title: String!, $description: String!, $image: String!){
    addPost(title: $title, description: $description, image: $image)
  }
`