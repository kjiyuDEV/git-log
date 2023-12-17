import mongoose from 'mongoose';
import moment from 'moment';

// Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['MainJuin', 'SubJuin', 'User'],
        default: 'User',
    },
    register_date: {
        type: Date,
        default: moment().format('YYYY-MM-DD hh:mm:ss'),
    },
    comments: [
        {
            post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'post', //얘를 참조할땐 posts라고 하겠다.
            },
            comment_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'comments',
            },
        },
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post',
        },
    ],
});

const User = mongoose.model('user', UserSchema); //이 모델은 user라고 명칭한다.

export default User;
