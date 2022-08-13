import Post from '../models/Post';

const resolvers = {
    Query: {
        getPosts: async () => {
            return await Post.find({})
                .sort({_id: -1});
        },
        getPost: async (_: any, { id }: any) => {
            return await Post.findById(id).populate('userId').exec();
        },
        getUserPosts: async (_: any, { id }: any) => {
            return await Post.find({ userId: id });
        }
    },
    Mutation: {
        addPost: async (parent: any, args: any) => {
            const post = new Post({ ...args });
            await post.save();
            return args.title
        }
    },
};

export default resolvers;