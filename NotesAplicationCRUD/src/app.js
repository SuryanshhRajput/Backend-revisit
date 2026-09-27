import express from "express";
import notesRoute from "./routes/notes.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.use("/notes", notesRoute);

export default app;
