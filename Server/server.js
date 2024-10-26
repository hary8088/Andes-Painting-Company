require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const dayjs = require("dayjs");
const app = express();

//Db connection
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Db connected");
});

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
const adminRouters = require("./routes/adminRouter");
app.use("/admin", adminRouters);
