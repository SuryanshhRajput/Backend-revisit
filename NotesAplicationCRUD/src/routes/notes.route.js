import express from "express";
import {
  createNotesController,
  getAllNotesController,
  getNotesByIdController,
  updateNoteController,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.post("/create", createNotesController);
router.get("/getAll", getAllNotesController);
router.get("/:id", getNotesByIdController);
router.put("/:id", updateNoteController)

export default router;
