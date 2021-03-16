import express from 'express';
import { createEvent, getEvent, getAllEvent, updateEvent} from '../controllers';
import { authenticate } from '../middlewares';

const router = express.Router();

router.post('/', authenticate, createEvent);
router.get('/', getAllEvent);
router.get('/:id', getEvent);
router.put('/:id', updateEvent);

export default router;