import mongoose from 'mongoose';

const JobSourceSchema = new mongoose.Schema({
    name: String,
    url: String
})

export const JobSource = mongoose.model('job-source', JobSourceSchema)