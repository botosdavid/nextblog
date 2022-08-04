import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    createdAt: String,
    category: String,
    // author: String,
})

postSchema.set('timestamps', true);
const Post = models.Post || model('Post', postSchema);

export default Post;