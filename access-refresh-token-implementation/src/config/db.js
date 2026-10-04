import mongoose from "mongoose";
import config from "./config.js";

export async function connectDB() {
  mongoose.connect(config.MONGO_URI);
  console.log("connected to db");
}
export default connectDB;
