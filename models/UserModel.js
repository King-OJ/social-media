import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        job: {
            type: String,
            default: "My Job"
            },
        location: {
            type: String,
            default: "My City"
            },
        friends: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            }
        ],
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            }
    },
    {
        timestamps: true
    }
)

UserSchema.methods.toJSON = function (){
    var obj = this.toObject()
    delete obj.password;
    return obj;
}

export default mongoose.model('User', UserSchema);