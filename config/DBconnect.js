const mongoose = require("mongoose");

exports.DBconnect = () => {
  // connect to the database
  try {
    mongoose.connect(
      "mongodb://127.0.0.1/socialMedia"
    );
    console.log("DB connection Successfull");
  } catch (error) {
    console.log("DB connection Error", error);
  }
};
