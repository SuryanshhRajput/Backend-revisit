import express from "express";
import authRoutes from "../routes/auth.router.js";
import cookieparser from "cookie-parser";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(cookieparser());

export default app;
