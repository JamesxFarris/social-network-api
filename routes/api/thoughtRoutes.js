const express = require("express");
const router = express.Router();

// Imports the controller functions
const thoughtController = require("../../controllers/thoughtController");

// Define routes using the controller functions

// GET /api/thoughts
router.get("/thoughts", thoughtController.getAllThoughts);

// GET /api/thoughts/:id
router.get("/thoughts/:id", thoughtController.getThoughtById);

// POST /api/thoughts
router.post("/thoughts", thoughtController.createThought);

// PUT /api/thoughts/:id
router.put("/thoughts/:id", thoughtController.updateThought);

// DELETE /api/thoughts/:id
router.delete("/thoughts/:thoughtId", thoughtController.deleteThought);

// POST /api/thoughts/:id/reactions
router.post("/thoughts/:id/reactions", thoughtController.addReaction);

// DELETE /api/thoughts/:id/reactions/:reactionId
router.delete(
  "/thoughts/:id/reactions/:reactionId",
  thoughtController.deleteReaction
);

module.exports = router;
