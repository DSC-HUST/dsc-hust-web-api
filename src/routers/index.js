import express from 'express';
import multer from 'multer';
import {uploadImage} from '../controllers';
import {errorHandler, authenticate} from '../middlewares';
import authenRouter from './authen';

const router = express.Router();

const upload = multer();

router.use('/authen', authenRouter);
router.post('/upload/image', authenticate, upload.single('image'), uploadImage);
router.post('/test', authenticate, (req, res) => {
    res.send("test");
});

router.use(errorHandler);

export {router};