import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
