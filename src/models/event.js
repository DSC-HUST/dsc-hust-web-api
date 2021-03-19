import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    profile: {
        type: String,
        required: true
    }
});

const eventSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    title: {
        type: String,
        requied: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    timeEvent: {
        type: Date,
        required: true
    },

    speaker: [speakerSchema]
});

export const Event = mongoose.model('Event', eventSchema);