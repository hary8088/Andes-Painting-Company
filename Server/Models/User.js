const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
});
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phoneNo: { type: String, require: true },
  address: { type: addressSchema, require: true },
});
module.exports = mongoose.model("User", userSchema);
