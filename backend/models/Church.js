const mongoose = require("mongoose");

const churchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  responsible: { type: String, required: true },
  website: { type: String, required: true },
  type: { type: String, required: true },
  foundationdate: { type: Date, required: true },
  cnpj: { type: String, required: true }, // similar to social security number
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Church", churchSchema);
