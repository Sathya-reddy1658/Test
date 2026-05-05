import express from 'express';
import { allComplaints, newComplaint } from '../controllers/complaintController.js';

const router = express.Router();

router.put('/new', newComplaint);

router.get('/getAll', allComplaints);

export default router;