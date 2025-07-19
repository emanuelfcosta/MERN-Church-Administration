const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  theDate: { type: Date, required: true },
  paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model("Financial", financialSchema);
