import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "username already exists"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email already exists"],
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});


const UserModel = mongoose.model('Users', userSchema);

export default UserModel;