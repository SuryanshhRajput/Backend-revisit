import { Router } from "express";
import {
  registerController,
  loginController,
  getAccessTokenByRefreshTokenController,
} from "../controllers/auth.controller.js";


const router = Router();

router.post("/register", registerController);

router.get("/login", loginController);

router.post("/refresh", getAccessTokenByRefreshTokenController);

export default router;
