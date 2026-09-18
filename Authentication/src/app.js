const express = require("express");
const jwt = require("jsonwebtoken")


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hey from backend",
  });
});

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const token = jwt.sign(
    {
      email,
      name,
    },
    "add27763c7f021a5aebb99e1ccb893c7698f2c2e482fb5cec4d95b1125cbbd10",
  );
  res.status(201).json({
    message: "user created successfully",
    data: {
      user: {
        email,
        name,
      },
      token,
    },
  });
});

module.exports = app;
