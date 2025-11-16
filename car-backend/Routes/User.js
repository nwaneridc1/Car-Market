const express = require("express");
const { CreatenewUser, Login, adminLogin,getsingleUser,} = require("../Controller/User");

const UserRoutes = express.Router();

// Defining routes for user-related actions
UserRoutes.post("/create", CreatenewUser);
UserRoutes.post("/login", Login);
UserRoutes.get("/:id",getsingleUser);
// UserRoutes.get("/users", getAllUsers);
UserRoutes.post("/admin", adminLogin);

module.exports = UserRoutes;