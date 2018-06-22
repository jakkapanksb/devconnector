const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  email: {
    type: String,
    requried: true
  },
  password: {
    type: String,
    requried: true
  },
  avatar: {
    type: String,
    requried: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

moduel.exports = User = mongoose.model("users", UserSchema);
