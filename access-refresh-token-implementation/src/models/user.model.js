import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name atleast 3 character long"],
    maxLnegth: [50, "Name couldn't exceed more than 50 character"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
