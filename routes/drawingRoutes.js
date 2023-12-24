// routes/drawingRoutes.js

const express = require("express");
const router = express.Router();
const Drawing = require("../models/Drawing");
// post drawing
router.post("/", async (req, res) => {
  try {
    const drawing = new Drawing(req.body);
    await drawing.save();
    res.status(201).send(drawing);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get all drawing
router.get("/", async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.send(drawings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;
