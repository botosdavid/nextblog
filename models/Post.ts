import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';
import User from './User';

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    createdAt: String,
    category: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: User
    },
})

postSchema.set('timestamps', true);
const Post = models.Post || model('Post', postSchema);

export default Post;