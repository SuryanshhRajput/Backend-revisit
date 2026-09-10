const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const app = express();
const notesRoute = require("./routes/notes.route");

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/notes", notesRoute);

module.exports = app;
