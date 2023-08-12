const express = require("express");
const router = express.Router();

// Imports the controller functions
const userController = require("../../controllers/userController");

// GET /api/users
router.get("/users", userController.getAllUsers);

// GET /api/users/:id
router.get("/users/:id", userController.getUserById);

// POST /api/users
router.post("/users", userController.createUser);

// PUT /api/users/:id
router.put("/users/:id", userController.updateUser);

// DELETE /api/users/:id
router.delete("/users/:id", userController.deleteUser);

// POST /api/users/:id/friends/:friendId
router.post("/users/:id/friends/:friendId", userController.addFriend);

// DELETE /api/users/:id/friends/:friendId
router.delete("/users/:id/friends/:friendId", userController.removeFriend);

module.exports = router;
