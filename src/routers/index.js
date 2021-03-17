import express from 'express';
import {errorHandler} from '../middlewares';
import authenRouter from './authen';
import uploadRouter from './upload';
import eventRouter from './event';
import memberRouter from './member';

const router = express.Router();

router.use('/authen', authenRouter);
router.use('/upload', uploadRouter);
router.use('/events', eventRouter);
router.use('/members', memberRouter);

router.use(errorHandler);

export {router};