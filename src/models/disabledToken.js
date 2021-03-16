import mongoose from 'mongoose';

const disabledTokenSchema = new mongoose.Schema({
    token: String
});

export const DisabledToken = mongoose.model('DisabledToken', disabledTokenSchema);