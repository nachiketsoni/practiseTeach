const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  //   password: { type: String, required: true },
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  age: { type: Number, required: true },
  bio: { type: String },
  avatar: { type: String }, // URL to user's profile picture
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
