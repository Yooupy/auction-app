const cloudinary = require("cloudinary").v2;
const axios = require("axios");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload file to Cloudinary
exports.uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "my_folder",
        public_id: file.filename,
        resource_type: "raw",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    const readStream = fs.createReadStream(file.path);
    readStream.pipe(uploadStream);
  });
};

// Get file from Cloudinary
exports.getFileStream = async (public_id) => {
  const url = cloudinary.url(public_id, { resource_type: "raw" });
  const response = await axios.get(url, { responseType: "stream" });
  return response.data;
};
