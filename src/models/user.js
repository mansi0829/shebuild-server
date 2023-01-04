const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: String, required: true },
  field: { type: String, required: true },
  fieldDescription: { type: String, required: true },
  userType: { type: String, required: true },
  gender: { type: String, required: true },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
