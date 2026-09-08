const express = require("express");
const connectDB = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();

app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("done");
});

app.post("/create", async(req, res) => {
  let { title, discription } = req.body;

  const newNote = await NotesModel.create({ title, discription });

  res.send({
    success: true,
    message: "Note created successfully",
    data: newNote,
  });
});

module.exports = app;
