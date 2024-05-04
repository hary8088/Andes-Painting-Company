require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const dayjs = require("dayjs");
const app = express();
// const port = 3003;

app.use([
  cors({
    origin: "http://localhost:5173",
  }),
  express.json(),
]);
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

const userRouters = require("./routes/userRouters");
app.use("/users", userRouters);
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
