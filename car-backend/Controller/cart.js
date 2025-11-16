const userModel = require("../Models/User");

// Add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, color } = req.body;

        // Find the user document
        const userData = await userModel.findById(userId);

        // Check if user exists
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Ensure cartData is initialized (fall back to empty object if null/undefined)
        let cartData = userData.cartData || {};

        // If the item already exists in the cart, update its quantity
        if (cartData[itemId]) {
            if (cartData[itemId][color]) {
                cartData[itemId][color] += 1;  // Increment the quantity if the color exists
            } else {
                cartData[itemId][color] = 1;   // Initialize quantity for the color
            }
        } else {
            cartData[itemId] = {};             // Create a new entry for the item if it doesn't exist
            cartData[itemId][color] = 1;      // Initialize the color quantity
        }

        // Update the user document with the new cartData
        await userModel.findByIdAndUpdate(userId, { cartData });

        // Respond with success message
        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, color, quantity } = req.body;

        // Find the user document
        const userData = await userModel.findById(userId);

        // Check if user exists
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Ensure cartData is initialized (fall back to empty object if null/undefined)
        let cartData = userData.cartData || {};

        // Check if the item exists in the cart and update the quantity for the color
        if (cartData[itemId] && cartData[itemId][color] !== undefined) {
            cartData[itemId][color] = quantity;
        } else {
            return res.status(400).json({ success: false, message: "Item or color not found in cart" });
        }

        // Update the user document with the new cartData
        await userModel.findByIdAndUpdate(userId, { cartData });

        // Respond with success message
        res.json({ success: true, message: "Cart updated" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        // Find the user document
        const userData = await userModel.findById(userId);

        // Check if user exists
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Get the cartData from the user document
        let cartData = await userData.cartData || {};  // Fallback to empty object if cartData is null

        // Respond with the cart data
        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    addToCart,
    updateCart,
    getUserCart
};
