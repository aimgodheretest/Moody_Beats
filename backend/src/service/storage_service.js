// Importing the ImageKit SDK for file uploads
// This module handles file uploads to ImageKit, a cloud storage service.
var ImageKit = require("imagekit");
var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Function to upload a file to ImageKit
const uploadFileToImageKit = (file) => {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer, // The file buffer
        fileName: "Millionaire", // The name of the file
        // folder: "songs", // Optional folder to upload to
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

module.exports = uploadFileToImageKit;
