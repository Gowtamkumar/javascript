const mongoose = require("mongoose");
const connectdb = async () => {
  const mongoURL =
    process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase";

  try {
    await mongoose.connect(mongoURL);
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectdb,
};
