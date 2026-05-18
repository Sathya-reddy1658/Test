import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.put('/login', login);
router.put('/register', register);

export default router;

