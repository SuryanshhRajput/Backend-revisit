import NotesModel from "../models/notes.model.js";

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NotesModel.create({ title, description });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error in creation", error);
    return res.status(500).json({
      message: "Error in creation",
      error: error.message,
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await NotesModel.find();
    res.status(200).json({
      message: "all notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in get all notes api", error);
  }
};

const getNotesByIdController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "note fetched successfullly",
      data: note,
    });
  } catch (error) {
    console.log("error in find by id api", error);
  }
};

const updateNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });
    res.status(200).json({
      message: "updated",
      data: updateNote,
    });
  } catch (error) {
    console.log("notes updated", error);
  }
};

export { createNotesController, getAllNotesController, getNotesByIdController , updateNoteController};
