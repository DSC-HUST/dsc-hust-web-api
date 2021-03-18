import  mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ['male', 'female'],
    },

    imageUrl: {
        type: String
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