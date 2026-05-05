import { rooms } from './Data/data.js';

export let getAllRooms = (req, res, next) => {
    res.json(rooms);
};

export let getRoom = (req, res, next) => {
    const id = req.params.id;
    const room = rooms.find(r => String(r.roomId) === String(id));

    if (!room) {
        return res.status(404).json({ error: 'room not found' });
    }

    res.json(room);
};