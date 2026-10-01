import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "token not found",
    });
  }
  console.log("this is the token ", token);

  const data = jwt.verify(token, process.env.JWT_SECRET);
  console.log(data);

  const user = await userModel.findById(data.id);
  console.log(user);

  //   res.status(200).json({
  //     message: "detail fetched",
  //     user,
  //   });

  req.user = user;
  next();
};

export default authenticate;
