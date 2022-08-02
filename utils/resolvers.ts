import Post from '../models/Post';

const resolvers = {
    Query: {
        getPosts: async () => {
        return await Post.find({});
        },
    },
    Mutation: {
        addPost: async (parent: any, args: any) => {
            const post = new Post({
                title: args.title, 
                description: args.description,
                image: args.image
            });
            await post.save();
            return args.title
        }
    }
};

export default resolvers;