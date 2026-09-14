const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const app = express();
const notesRoute = require("./routes/notes.route");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
connectDb();

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/notes", notesRoute);

module.exports = app;
