import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  let isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "User already exist",
      errors: [{ path: "email", message: "User already exist" }],
    });
  }

  const user = await userModel.create({
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
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    },
  });
};

export const loginController = async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = verifyAccessToken(accessToken);
    const user = await userModel.findById(decoded.id);

    res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised, Invalid or expired access token",
    });
  }
};

export const getAccessTokenByRefreshTokenController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorised, refresh token is not found",
    });
  }

  try {
    const decoded = await verifyRefreshToken(refreshToken);
    const user = await userModel.findById(decoded.id);

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "Unauthorised, refresh token mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });
    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "token refreshed successful",
      accessToken,
    });


  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised, Invalid or expired refresh token",
    });
  }
};
