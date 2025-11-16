const jwt = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.json({
                success: false,
                message: "Not Authorized, Try Again"
            });
        }
        
        // Decode the token using the secret key
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if the decoded token contains the email or other identifier
        // Assuming the decoded token contains the 'email' field
        const adminEmail = process.env.ADMIN_EMAIL;
        
        // Compare the email in the decoded token with the admin email
        if (decodedToken.email !== adminEmail) {
            return res.json({
                success: false,
                message: "Not Authorized, Try Again"
            });
        }

        // Proceed to the next middleware or route handler if token is valid
        next();

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

module.exports = adminAuth;
