const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["line", "shape", "text"],
    required: true,
  },
  data: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("drawing", drawingSchema);
