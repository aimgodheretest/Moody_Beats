const express = require("express"); // Importing express for routing
const multer = require("multer"); // Importing multer for handling file uploads
const uploadFile = require("../service/storage.service"); // Importing the uploadFile function from storage
const router = express.Router(); // Creating a new router instance
const songModel = require("../models/song.model"); // Importing the song model for database interactions

const upload = multer({ storage: multer.memoryStorage() }); // Configuring multer to store files in memory

// Route to handle song creation with file upload
router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const fileData = await uploadFile(req.file); // Uploading the file using the uploadFile function

  const song = await songModel.create({
    title: req.body.title, // Getting the title from the request body
    artist: req.body.artist, // Getting the artist from the request body
    audio: fileData.url, // Using the URL returned from the uploadFile function
    mood: req.body.mood, // Getting the mood from the request body
  }); // Creating a new song document in the database

  res.status(201).json({
    message: "Song created successfully",
    song: song,
  }); // Sending a success response with the uploaded song data
});

router.get("/songs", async (req, res) => {
  const { mood } = req.query; // Extracting the mood from query parameters

  const songs = await songModel.find({
    mood: mood,
  }); // Finding songs that match the mood

  res.status(200).json({
    message: "Songs fetched successfully",
    songs: songs,
  }); // Sending a response with the fetched songs data
});

module.exports = router; // Exporting the router to be used in the main application
