import express from 'express';
import {login, logout, refreshToken} from '../controllers';

const router = express.Router();

router.post('/login', login);
router.delete('/logout', logout);
router.post('/refresh-token', refreshToken);

export default router;