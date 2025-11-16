const express = require("express");
const { addProduct, listProduct, removeProduct, singleProduct,} = require("../Controller/Product");
const upload = require("../Middleware/multer");
const adminAuth = require("../Middleware/adminAuth");

const productRouter = express.Router(); // Use productRouter here

// POST: Add a product with image uploads
productRouter.post("/add",adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
]), addProduct);


productRouter.post("/remove",adminAuth, removeProduct);


productRouter.get("/list", listProduct);


productRouter.get("/single/:productId", singleProduct);


module.exports = productRouter;
