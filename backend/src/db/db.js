const mongoose = require("mongoose");

// This function connects to the MongoDB database using Mongoose.
// It reads the connection string from the environment variable MONGODB_URL.
function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
}
module.exports = connectDB;
