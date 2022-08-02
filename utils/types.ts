export interface Post { 
    __typename: string,
    title: string,
    description: string,
    image: string,
    author?: string,
    likes?: string
}

export interface PostInput {
    title: string,
    description: string,
    image: string 
}

export enum PostInputActionType { 
    TYPE_TITLE,
    TYPE_DESCRIPTION,
    TYPE_IMAGE,
    RESET
}

export interface PostInputAction {
    type: PostInputActionType,
    payload: string
}