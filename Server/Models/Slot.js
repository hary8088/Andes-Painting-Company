const mongoose = require("mongoose");
const slotSchema = new mongoose.Schema({
  slot: { type: String, unique: true },
});
module.exports = mongoose.model("Slot", slotSchema);
