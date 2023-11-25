const mongoose = require("mongoose");

exports.DBconnect = () => {
  // connect to the database
  try {
    mongoose.connect(
      "mongodb+srv://nxchikxt:nxchikxt@cluster0.tskdu2w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB connection Successfull");
  } catch (error) {
    console.log("DB connection Error", error);
  }
};
