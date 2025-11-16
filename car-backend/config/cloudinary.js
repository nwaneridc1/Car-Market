const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,     // Correct environment variable name
  api_key: process.env.CLOUD_KEY,          // Correct environment variable name
  api_secret: process.env.CLOUD_KEY_SECRET // Correct environment variable name
});

module.exports = cloudinary;
