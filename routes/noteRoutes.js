// routes/noteRoutes.js

const express = require("express");
const router = express.Router();
const Note = require("../models/note");

// Create a note
router.post("/", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Read all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a note
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) {
      return res.status(404).send("Note not found");
    }
    res.send(note);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    res.send(note);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
