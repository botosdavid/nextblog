import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    title: String,
    description: String,
    // author: String,
    // date: Date,
})

const Post = models.Post || model('Post', postSchema);

export default Post;