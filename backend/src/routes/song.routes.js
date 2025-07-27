const express = require("express"); // Importing express for routing
const multer = require("multer"); // Importing multer for handling file uploads
const uploadFile = require("../service/storage.service"); // Importing the uploadFile function from storage
const router = express.Router(); // Creating a new router instance

const upload = multer({ storage: multer.memoryStorage() }); // Configuring multer to store files in memory

router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body); // Logging the request body
  console.log(req.file); // Logging the uploaded file

  const fileData = await uploadFile(req.file); // Uploading the file using the uploadFile function
  console.log(fileData); // Logging the response from the upload

  res.status(201).json({
    message: "Song created successfully",
    song: req.body,
  }); // Sending a success response with the uploaded song data
});

module.exports = router; // Exporting the router to be used in the main application
