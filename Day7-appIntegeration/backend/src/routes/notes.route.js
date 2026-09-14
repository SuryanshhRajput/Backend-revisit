const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNoteController
} = require("../controllers/notes.controller");
const NotesModel = require("../models/notes.model");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNoteController);

router.put("/:id", updatedNotesController);

router.delete("/:id", deleteNoteController)

module.exports = router;
