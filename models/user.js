const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Number,
    default: Date.now().valueOf(),
  },
  updated_at: {
    type: Number,
    default: Date.now().valueOf(),
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
