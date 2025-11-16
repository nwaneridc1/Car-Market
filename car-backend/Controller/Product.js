const cloudinary = require("cloudinary").v2
const productModel = require("../Models/product")

//for add product//
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, type, color, bestseller } = req.body;

        // Ensure color is a valid JSON string, otherwise fallback to an empty array
        let parsedColors = [];
        if (color) {
            try {
                parsedColors = JSON.parse(color);  // Attempt to parse color
                if (!Array.isArray(parsedColors)) {
                    throw new Error("Color should be an array.");
                }
            } catch (err) {
                return res.json({ success: false, message: "Invalid color data" });
            }
        }

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            subCategory,
            type,
            price: Number(price),
            bestseller: bestseller === "true" ? true : false,
            color: parsedColors,  // Using the parsed color array
            image: imagesUrl,
            date: Date.now(),
        };

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//for list product///
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({
            success: true,
            products
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

//for remove product////
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product Removed Successfully"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

//for single product info///
const singleProduct = async (req, res) => {
    try {
      // Get productId from the URL params instead of the request body
      const { productId } = req.params;
  
      // Find the product in the database
      const product = await productModel.findById(productId);
  
      // If the product doesn't exist, return a 404 response
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }
  
      // Send the product data in the response
      res.json({
        success: true,
        product
      });
    } catch (error) {
      console.error(error);
  
      // Return error message in the response
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  

module.exports = {
    singleProduct,
    removeProduct,
    addProduct,
    listProduct
};
