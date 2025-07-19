const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  status: { type: String, required: true },
  role: { type: String, required: true },
  baptismdate: { type: Date, required: true },
  addmission: { type: String, required: true }, // OBS: So 1 d
  name: { type: String, required: true },
  gender: { type: String, required: true }, // sexo
  birthdate: { type: Date, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  occupation: { type: String, required: true },

  church: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Church",
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema);
