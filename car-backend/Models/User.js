const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true
  },
  cartData: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true,
}, { minimize: false });

// // Password hashing middleware
// userSchema.pre("save", async function (next) {
//   try {
//     if (this.isModified("password")) { // Only hash password if it's modified
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

module.exports = userModel

