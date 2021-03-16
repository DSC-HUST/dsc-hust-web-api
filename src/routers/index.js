import express from 'express';
import {errorHandler} from '../middlewares';
import authenRouter from './authen';
import uploadRouter from './upload';
import eventRouter from './event';

const router = express.Router();

router.use('/authen', authenRouter);
router.use('/upload', uploadRouter);
router.use('/events', eventRouter);

router.use(errorHandler);

export {router};