const mongoose = require("mongoose");

const studySchema = new mongoose.Schema({
  theDate: { type: Date, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  notes: { type: String, required: true },
});

module.exports = mongoose.model("Study", studySchema);
