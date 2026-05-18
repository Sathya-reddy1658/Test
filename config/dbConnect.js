import mongoose from 'mongoose';

const dbConnect = async () => {
    console.log("entered the fun");
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`connedted host : ${connect.connection.host}, ${connect.connection.name}`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default dbConnect;