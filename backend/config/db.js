const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(process.env.MONGO_DB_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
