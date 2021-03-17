import  mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    role: {
        type: String
    },

    profile: {
        type: String,
        required: true
    },

    gmail: {
        type: String,
        required: true
    }
});

export const Member = mongoose.model('Member', MemberSchema);