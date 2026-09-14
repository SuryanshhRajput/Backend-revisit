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
};

const updatedNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    await NotesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.send(500).json({
      message: "intenral server error",
    });
  }
};
module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNoteController,
};
