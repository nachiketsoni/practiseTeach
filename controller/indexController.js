const User = require("../model/userModel");

exports.createUser = async (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
    profile: req.body.profile,
  });
  await newUser.save();
  res.json(newUser);
};
exports.FindAllUser = async (req, res, next) => {
  const users = await User.find();
  res.json(users);
};
exports.updateUser = async (req, res, next) => {
  // const users = await User.findOneAndUpdate(
  //   { _id: "6564de629b66c04ba54a0f77" },
  //   { name: "Pranjal" }
  // );
  const users = await User.findOne({ _id: "6564de629b66c04ba54a0f77" });
  users.name = "Pranjal";
  await users.save();
  res.json(users);
};
exports.deleteUser = async (req, res, next) => {
  const users = await User.findOneAndDelete({
    _id: "6564de629b66c04ba54a0f77",
  });
  res.json(users);
};
