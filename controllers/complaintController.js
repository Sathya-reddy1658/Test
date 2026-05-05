import { complaints } from './Data/data.js';

export const allComplaints = (req, res, next) => {
      res.json(complaints);
}

export const newComplaint = (req, res, next) => {
    let { roomId, complaint } = req.body;
    let newComp = {
        roomId: roomId,
        complaint : complaint
    }

    complaints.push(newComp);
    res.json(newComp);
}