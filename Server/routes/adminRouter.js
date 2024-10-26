const express = require("express");
const router = express.Router();
const Slot = require("../Models/Slot");

//Add Slots
router.put("/addSlot", async (req, res) => {
  try {
    const slot = await new Slot({
      slot: req.body.slot,
    });
    const newSlot = await slot.save();
    res.status(200).json(newSlot);
    // res.json({ message: "success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get Slot
router.get("/getSlots", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.status(200).send(slots);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
