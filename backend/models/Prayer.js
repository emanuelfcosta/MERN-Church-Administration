const mongoose = require("mongoose");

const prayerSchema = new mongoose.Schema({
  reason: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Prayer", prayerSchema);
