export interface Post { 
    __typename: string,
    _id: string,
    title: string,
    description: string,
    image: string,
    createdAt: string,
    category: Category
    author?: string,
    likes?: string
}

export interface PostInput {
    title: string,
    description: string,
    image: string,
    category: Category
}

export enum PostInputActionType { 
    TYPE_TITLE,
    TYPE_DESCRIPTION,
    TYPE_IMAGE,
    TYPE_CATEGORY,
    RESET
}

export interface PostInputAction {
    type: PostInputActionType,
    payload: string
}

export enum Category {
    ALL = 'All',
    SPORT = 'Sport',
    FOOD = 'Food',
    TECH = 'Tech',
}