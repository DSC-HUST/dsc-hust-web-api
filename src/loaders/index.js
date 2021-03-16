import {app} from './app';
import mongoose from 'mongoose';
import {mongodbOptions, MONGODB_URI, PORT} from '../configs';

export const startServer = async () => {
    try{
        await Promise.all([
            mongoose.connect(MONGODB_URI, mongodbOptions),
            app.listen(PORT)
        ]);
        // mongoose.set('debug', true);
        console.log('Server running, db connected');
    }
    catch(error) {
        console.log(error.message);
    }
}