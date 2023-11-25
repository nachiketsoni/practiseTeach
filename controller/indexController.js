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
