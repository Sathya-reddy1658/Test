import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import verifyRole from '../middlewares/roleMiddleware.js';

let router = express.Router();

router.get('/test', verifyToken, (req, res,next) => {
    res.send("authized successfully!!");
})
router.get('/admin', verifyToken,verifyRole("admin"), (req, res,next) => {
    res.send("hello admin!!");
})
router.get('/manager', verifyToken, verifyRole("admin","manager"), (req, res,next) => {
    res.send("hello manager!!");
})
router.get('/user', verifyToken,verifyRole("admin","manager","user"), (req, res,next) => {
    res.send("hello user!!");
})

export default router;