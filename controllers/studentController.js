import { stu, rooms } from './Data/data.js';

export const getAllStudents = (req, res, next) => {
  res.json(stu);
};


export const getStudent = (req, res, next) => {
  const id = req.params.id;
  const student = stu.find((s) => String(s.id) === String(id));
  res.send(student);
};

export const newEntry = (req, res, next) => {
    const { id, name, room, floor } = req.body;
    const roomData = rooms.find((r) => r.roomId === room);

    if (!roomData) {
        res.status(400).json({ error: "Room not available!!" });
        return;
    }

    if (!id || !name || !room || !floor) {
        res.status(400).json({ eroor: " missing fields" });
        return;
  }
  
  roomData.roomates.push(id);
    
  let entry = {
    id: id,
    name: name,
    room: room,
    floor: floor,
  };
  
  stu.push(entry);
  
  res.send(entry);
    
};
