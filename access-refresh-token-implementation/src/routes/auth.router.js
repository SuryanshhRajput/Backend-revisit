import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/auth.js";

const router = Router();
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let isUserexist = await userModel.findOne({ email });

  if (isUserexist) {
    return res.status(400).json({
      message: "User already exist",
      errors: [{ path: "email", message: "User already exists" }],
    });
  }

  const user = await new userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { refreshToken, accessToken } = generateTokens({ userId: user._id });

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(201).json({
    message: "user registered successfully",
    data: {
      user: { name: user.name, email: user.email },
    },
    accessToken,
  });
});


router.get("/me", async (req, res) => {
  
})

export default router;
