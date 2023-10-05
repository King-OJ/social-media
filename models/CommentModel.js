import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
    {
    comment: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Comment', CommentSchema);