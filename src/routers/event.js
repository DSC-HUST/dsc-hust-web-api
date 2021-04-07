import express from 'express';
import { createEvent, getEvent, getAllEvent, updateEvent, confirmEmail, getAllConfirmEmail} from '../controllers';
import { authenticate } from '../middlewares';

const router = express.Router();

router.get('/confirm', confirmEmail);
router.get('/confirm/all', getAllConfirmEmail);

router.post('/', authenticate, createEvent);
router.get('/', getAllEvent);
router.get('/:id', getEvent);
router.put('/:id', updateEvent);

export default router;