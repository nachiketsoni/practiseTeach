const User = require("../model/userModel");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(501).json({ message: "create user failed", error });
  }
};
exports.findUser = async (req, res, next) => {
  try {
    const users = await User.findOne({
      _id: req.params.id,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(501).json({ message: "Delete user failed", error });
  }
};
exports.findAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(501).json({ message: "Find All user failed", error });
  }
};
exports.updateUser = async (req, res, next) => {
  console.log(req.body);
  try {
    try {
      var user = await User.findOneAndUpdate(
        { _id: req.body._id },
        { ...req.body.updatedValues }
      );
    } catch (error) {
      console.log(error);
    }

    await user.save();

    res.status(200).json(User);
  } catch (error) {
    res.status(501).json({ message: "Update user failed", error });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const users = await User.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(501).json({ message: "Delete user failed", error });
  }
};
