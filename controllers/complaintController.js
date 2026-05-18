import { complaints } from './Data/data.js';

export const allComplaints = (req, res, next) => {
      res.json(complaints);
}

export const newComplaint = (req, res, next) => {
    let newComp = req.complaint;
    complaints.push(newComp);
    res.json(newComp);
}