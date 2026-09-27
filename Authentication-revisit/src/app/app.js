import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Authentication API",
  });
});

app.post("/api/register", (req, res) => {
  const { email, name, password } = req.body;


  const token = jwt.sign()
});

export default app;
