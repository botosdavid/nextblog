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

export const GET_POST =  gql`
  query GetPost($id: String!){
      getPost(id: $id) {
        title
        image
        description
        category
        createdAt
      }
    }
`

export const ADD_POST = gql`
  mutation AddPost($title: String!, $description: String!, $image: String!, $category: String!){
    addPost(title: $title, description: $description, image: $image, category: $category)
  }
`