import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import authenticate from "../middleware/auth.middleware.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    email,
    name,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.status(201).json({
    message: "User Created Successfully",
    data: {
      users: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/api/auth/me", authenticate, async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  const  isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(200).json({
    message: "user loggedin",
    data: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
  });
});

export default app;
