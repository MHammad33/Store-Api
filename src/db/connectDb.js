const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url, {
      dbName: "store",
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = connectDb;