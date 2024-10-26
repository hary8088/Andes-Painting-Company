const mongoose = require("mongoose");
const User = require("./User");
const Slot = require("./Slot");
const bookedSlotSchema = new mongoose.Schema({
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["UpComing", "Completed"],
    default: "UpComing",
  },
});
module.exports = mongoose.model("BookedSlots", bookedSlotSchema);
