const NotesModel = require("../models/notes.model");

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
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.status(200).json({
      message: "all notes fetched succesfully",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in all notes api", error);
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await NotesModel.findById(noteId);
    res.status(200).json({
      message: "note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log("errors in single notes api", error);
  }
}

module.exports = { createNotesController, getAllNotesController, getSingleNoteController };
