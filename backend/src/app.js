// Import the Express framework
const express = require("express");

// Import the song routes from the routes directory
const songRoutes = require("./routes/song.routes");

// Create an instance of an Express application
const app = express();
// app.use(express.json());  // Middleware to parse JSON bodies for raw data

app.use("/", songRoutes);

module.exports = app;
