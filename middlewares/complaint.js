import { rooms  } from '../controllers/Data/data.js';

export let validateComplaint = (req, res, next) => {
    let { roomId, complaint } = req.body;
    let roomData = rooms.find((r) => r.roomId === roomId);
    
    if (!roomData) {
        return next(new Error("room nhi he bro"));
    }
    if (!complaint) {
        return res.status(400).send({ error: "complaint cannot be empty" });
    }
    
    req.complaint = {
        roomId: roomId,
        complaint: complaint
    }
    next();
}