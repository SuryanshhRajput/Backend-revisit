import config from "./config.js";
import mongoose from "mongoose";

export const connectToDB = async () => {
  await mongoose.connect(config.MONGO_URI);
  console.log("Connected to Database")
};
