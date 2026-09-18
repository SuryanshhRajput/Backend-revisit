const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.model.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hey from backend",
  });
});

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    email,
    name,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    "add27763c7f021a5aebb99e1ccb893c7698f2c2e482fb5cec4d95b1125cbbd10",
  );
  res.status(201).json({
    message: "user created successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/api/me", async (req, res) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);
  res.status(200).json({
    message:"token sent"
  })

  const data = jwt.decode(authHeader);

  console.log(data)

  const user = await userModel.findById(data.id)
  console.log(user)

 
});

module.exports = app;
