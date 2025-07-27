// Import the Express framework
const express = require("express");
const cors = require("cors");

// Import the song routes from the routes directory
const songRoutes = require("./routes/song.routes");

// Create an instance of an Express application
const app = express();
// app.use(express.json());  // Middleware to parse JSON bodies for raw data

app.use(cors()); // Enable CORS for all routes 

app.use("/", songRoutes);

module.exports = app;
