var mongoose = require("mongoose"); // Importing mongoose for MongoDB interactions
// Importing the ImageKit SDK for file uploads
// This module handles file uploads to ImageKit, a cloud storage service.
var ImageKit = require("imagekit");
var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Function to upload a file to ImageKit
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: file.originalname, // The name of the file being uploaded
        useUniqueFileName: true, // Ensures the file name is unique
        folder: "MoodPlayerSongs", // The folder where the file will be stored
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = uploadFile; // Exporting the uploadFile function for use in other modules
// This function can be used to upload files to ImageKit from other parts of the application.
