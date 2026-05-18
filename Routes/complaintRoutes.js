import express from 'express';
import { allComplaints, newComplaint } from '../controllers/complaintController.js';
import { validateComplaint } from '../middlewares/complaint.js';
const router = express.Router();

router.put('/new',validateComplaint, newComplaint);

router.get('/getAll', allComplaints);

export default router;