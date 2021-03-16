import express from 'express';
import {authenticate} from '../middlewares';
import {uploadImage} from '../controllers';
import multer from 'multer';

const upload = multer();

const router = express.Router();
router.use(authenticate);
router.post('/image', upload.single('image'), uploadImage);

export default router;
