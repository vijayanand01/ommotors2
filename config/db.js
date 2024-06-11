const mongoose = require("mongoose");

//connection to mongodb database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
