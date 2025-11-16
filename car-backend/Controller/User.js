const asyncHandler = require("express-async-handler");
const user = require("../Models/User");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/User");


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const CreatenewUser = asyncHandler(async (req, res) => {
  const { username, email, password, name, } = req.body;

  try {
    // Check if user already exists
    const userExist = await user.findOne({ $or: [{ username }, { email }] });
    if (userExist) {
      return res.json({
        message: "User already exists",
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Please Enter A Strong Password",
      });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const create = await user.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id); // Ensure correct user ID

    res.status(201).json({
      success: true,
      CreatenewUser,
      token,
      message: "Signup successful",
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Signup failed",
    });
  }
});

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    }
    else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/// /// /// get single user ////
const getsingleUser = asyncHandler(async(req, res)=>{
  const {id} =req.params
  try{
      const data= await userModel.findById(id)
      if(!data){
          res.status(404).json({
              message:"User Not found"
          })
      }
      res.status(200).json({
          message:"Successful",
          data
      })

  }
  catch (error){
      res.status(401).json({
          message:"Unsuccessful",
      })
  }
});

// -------------------- get all users -----------------
// const getAllUsers = asyncHandler(async (req, res) => {
//   try {
//     // Optional: Add admin-only access check
//     // const adminEmail = process.env.ADMIN_EMAIL;
//     // if (req.user?.email !== adminEmail) {
//     //   return res.status(403).json({ success: false, message: "Access denied" });
//     // }

//     const users = await userModel.find().sort({createdAt:-1}); 
//     res.status(200).json({
//       success: true,
//       message: "Users fetched successfully",
//       users,
//     });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });


const adminLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid User Credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = {
  CreatenewUser,
  Login,
  getsingleUser,
  // getAllUsers,
  adminLogin,
};
