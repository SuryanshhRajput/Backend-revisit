const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
