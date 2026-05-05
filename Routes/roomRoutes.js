import express from 'express';
import { getAllRooms, getRoom } from '../controllers/roomController.js';

const router = express.Router();

router.get('/getRoom/:id', getRoom)

router.get('/getAllRooms', getAllRooms);

export default router;
