require("dotenv").config();
const User = require("../models/user");

async function getProvidername(req, res) {
  const record = req.body;
  const provider = await User.find({ role: record.role }).lean().select("-password -__v");
  if (!provider) {
    return res.status(404).send("User not found");
  }
  res.json({ ...provider });
}

module.exports = { getProvidername };
