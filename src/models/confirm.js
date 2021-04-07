import mongoose from 'mongoose';

const confirmSchema = new mongoose.Schema({
    email: String
});

export const Confirm = mongoose.model('confirm', confirmSchema);
