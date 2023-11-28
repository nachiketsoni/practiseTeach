const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  //   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: String,
  likes: { type: Array, default: [] },
  comments: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Post", postSchema);
