const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://suryansh:Symphony!!12@cluster0.jjjcf7v.mongodb.net/",
    );
    console.log("mongodb Connected");
  } catch (error) {
    console.log("error in db", error);
  }
};
module.exports = connectDB;
