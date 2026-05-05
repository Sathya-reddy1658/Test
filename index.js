import express from 'express';
const app = express();

import roomRoutes from './Routes/roomRoutes.js'
import complaintRoutes from './Routes/complaintRoutes.js';
import studentRoutes from './Routes/studentRoutes.js';
                    
app.use(express.json());

app.listen(3000, () => {
    console.log("app running on port 3000");
})

app.get('/', (req, res) => {
    res.send("home page contacted.");
})

app.use('/rooms', roomRoutes);
app.use('/students', studentRoutes);
app.use('/complaints', complaintRoutes);