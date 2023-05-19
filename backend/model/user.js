const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required:true },
  last_name: { type: String, required:true},
  email: { type: String, unique: true, required:true },
  password: { type: String, required:true },
  address:{type:String},
  address2:{type:String},
  city:{type:String},
  state:{type:String},
  zip:{type:String},
  checkout:{type:Boolean},
  token: { type: String },
},
);

const User = mongoose.model("User", userSchema);
module.exports = User;