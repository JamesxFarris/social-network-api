const Thought = require("../models/Thought");

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Get a single thought by its id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then((thoughtData) => {
        // If there is no thought data, return a 404 error
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user ? res.status(404) : res.json("Created the thought")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a thought by its id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a thought by its id
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json("Deleted the thought")
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
};
