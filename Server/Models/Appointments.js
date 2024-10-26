const mongoose = require("mongoose");
const appointmentsSchema = new mongoose.Schema({
  date: { type: String, required: true },
  bookedSlots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookedSlots",
      require: true,
    },
  ],
});

module.exports = mongoose.model("Appointments", appointmentsSchema);
