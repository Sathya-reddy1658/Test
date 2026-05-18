import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';

export const register = async (req,res,next) => {
    try {
        const { username, password, role } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            password : hashedPass,
            role
        });
        await newUser.save();
        res.status(201).json({ message: "user registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "something went wrong"+ err });
    }
};

export const login = async (req,res,next) => {
    try {
        
        const { username, password } = req.body;
    
        const user = await User.findOne({ username: username });
    
        if (!user) {
            return res.status(500).json({ message: "user not found " });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({ message: "incorrect password" });
        }
    
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        
        res.status(200).json({ token });

    } catch (err) {
        res.status(500).json({ message: "something is wrong"+err });
    }
}