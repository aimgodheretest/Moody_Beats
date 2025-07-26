const mongoose = require("mongoose"); // Importing mongoose for MongoDB object modeling

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
}); // Define the schema for the song model with title, artist, and audio fields

const song = mongoose.model("song", songSchema); // Create the song model using the schema defined above

module.exports = song;
