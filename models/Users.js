import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    hash: String,
    accessGroups: [String]
})

export const User = mongoose.model('user', UserSchema)