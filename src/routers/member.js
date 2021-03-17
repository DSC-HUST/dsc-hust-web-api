import express from 'express';
import { createMember, getAllMember, getMemberById, updateMember, deleteMember } from '../controllers';
import { authenticate } from '../middlewares';

const router = express.Router();

router.get('/', getAllMember);
router.post('/', authenticate, createMember);
router.put('/:id', authenticate, updateMember);
router.delete('/:id', authenticate, deleteMember);
router.get('/:id', getMemberById);

export default router;