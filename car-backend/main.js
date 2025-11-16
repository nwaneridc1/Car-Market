const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const UserRoutes = require("./Routes/User");
const bodyparser = require("body-parser");
const { cloudinary_js_config } = require("./config/cloudinary");

const app = express();

connectDB();
cloudinary_js_config();


const port = process.env.PORT || 5000;

// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyparser.json()); 

// Routes
app.use("/user", UserRoutes);

app.get('/',(req,res)=>{
    res.send("API Working Perfectly")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`.yellow);
});