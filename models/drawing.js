const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  drawing: {
    type: Buffer,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("drawing", drawingSchema);
