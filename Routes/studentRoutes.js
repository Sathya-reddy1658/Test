import express from 'express';
const router = express.Router();
import { getAllStudents, getStudent, newEntry } from '../controllers/studentController.js';

router.get('/getAllStudents', getAllStudents);
 
router.get('/getStudent/:id', getStudent);

router.put('/newStudent', newEntry);

export default router;