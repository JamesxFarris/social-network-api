const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router
  .route("/")
  // GET all thoughts
  .get(getAllThoughts)
  // POST a new thought
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  // GET a single thought by its _id
  .get(getThoughtById)
  // PUT to update a thought by its _id
  .put(updateThought)
  // DELETE to remove a thought by its _id
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reaction").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
