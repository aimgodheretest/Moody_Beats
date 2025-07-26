require("dotenv").config(); // Load environment variables from .env file
const app = require("./src/app.js"); // Import the Express app from app.js
const connectDB = require("./src/db/db.js"); // Import the database connection function

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
// Start the server and connect to the database
// The server listens on port 3000 and logs a message when it's ready
// The connectDB function is called to establish a connection to MongoDB  
// using Mongoose, and it logs the connection status.