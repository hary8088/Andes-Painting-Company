const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { Long } = require("mongodb");
const Appointments = require("../Models/Appointments");
const Slot = require("../Models/Slot");
const BookedSlot = require("../Models/BookedSlot");
const getDateFormat = (date) => {
  const dateObj = new Date(Number(date));
  return (
    dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear()
  );
};
//GetSlots
router.get("/", async (req, res) => {
  console.log(req.body.name);
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Add user
router.put("/addUser", async (req, res) => {
  try {
    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
      },
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(402).json({ message: err.message });
  }
});

//Get Available Slots
router.get("/getAvailableSlots", async (req, res) => {
  const dateString = getDateFormat(req.query.date);
  try {
    let appointments = await Appointments.findOne({
      date: dateString,
    }).populate("bookedSlots");
    if (appointments == null) {
      const newAppointment = await new Appointments({
        date: dateString,
        bookedSlots: new Array(),
      });
      await newAppointment.save();
    }
    appointments = await Appointments.findOne({ date: dateString }).populate(
      "bookedSlots"
    );
    const bookedSlots = appointments["bookedSlots"];
    let freeSlots = await Slot.find();
    bookedSlots.forEach((bookedSlot) => {
      freeSlots = freeSlots.filter((slot) => slot.id != bookedSlot.slot);
    });
    res.status(200).json(freeSlots);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Book Slot
router.post("/bookSlot", async (req, res) => {
  // console.log(req.body.name);
  try {
    let existUser = await User.findOne({ email: req.body.email });
    if (!existUser) {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        address: {
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
        },
      });
      existUser = await newUser.save();
    }
    const slotTime = await Slot.findById(req.body.slotId);
    const bookedSlot = await BookedSlot.create({
      slot: slotTime,
      user: existUser,
    });
    const newBookedSlot = await bookedSlot.save();
    const dateString = getDateFormat(req.body.date);
    Appointments.findOne({ date: dateString })
      .then((appointment) => {
        console.log(appointment);
        if (appointment) {
          appointment.bookedSlots.push(newBookedSlot);
          appointment.save();
        } else {
          throw new Error("Appointment not found for the existing date");
        }
      })
      .catch((error) => {
        throw new Error("Error adding booked slot:" + error);
      });
    res.status(200).json({ message: "Success!.." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
