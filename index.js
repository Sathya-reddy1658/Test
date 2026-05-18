import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js'
import roomRoutes from './Routes/roomRoutes.js'
import complaintRoutes from './Routes/complaintRoutes.js';
import studentRoutes from './Routes/studentRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import { customHandler } from './ErrorHandlers/errorHandler.js'

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
dbConnect();

app.get('/test', (req, res) => {
    res.send("apprunngin");
})
app.use('/auth', authRoutes);
app.use('/rooms', roomRoutes);
app.use('/users', userRoutes);
app.use('/students', studentRoutes);
app.use('/complaints', complaintRoutes);

app.use(customHandler);

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});