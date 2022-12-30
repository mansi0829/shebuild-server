const mongoose = require("mongoose");

//user profile schema
const userSchema = new mongoose.Schema({
  token:[{ token:{type:String, required:true}}],
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: String },//need or provider
  description:{type:String},
  gender:{type:String},
  image:{type:Buffer},
});

const providerSchema = new mongoose.Schema({
  name:userSchema.name,
  email: userSchema.email,
  phone:userSchema.email,
  description:userSchema.description,
  role: userSchema.role,//need or provider
});

const User = mongoose.model("User", userSchema);
const Provider=mongoose.model('Provider',providerSchema)
module.exports = {User,Provider};
