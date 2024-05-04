const express = require("express");
const router = express.Router();

// app.post("/getSlots", async (req, res) => {
//   const milliseconds = req.body.date;
//   const date = new Date(milliseconds);
//   // console.log(milliseconds + "---- " + date);
//   // console.log(typeof date.toDateString());
//   if (date.toDateString() == new Date(dayjs()).toDateString()) {
//     res.json({ slots: ["9AM", "10AM"] });
//   } else if (date == 1713547389000) {
//     res.json({ slots: ["11AM", "1PM"] });
//   }
// });

//GetSlots
router.get("/", async (req, res) => {
  const milliseconds = req.query.date;
  //   console.log(milliseconds);
  const date = new Date(milliseconds);
  //   console.log(date.toDateString());
  // res.json({ slots: [] });
  res.json({
    slots: ["9AM", "10AM", "11AM", "12PM", "2PM", "3PM", "4PM", "5PM"],
  });
});

module.exports = router;
