import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
    caption: String,
    content: {
        type: String,
        default: ""
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        },
    },
    { timestamps: true }
)

export default mongoose.model('Post', PostSchema);