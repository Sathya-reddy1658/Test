import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "manager", "user"],
  },
}, { timestamps: true });

export default Mongoose.model("User",userSchema);
