const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router
  .route("/")
  // GET all users
  .get(getAllUsers)
  // POST a new user
  .post(createUser);

// /api/users/:userId
router
  .route("/:id")
  // GET a single user by its  and populated thought and friend data
  .get(getUserById)
  // PUT to update a user by its
  .put(updateUser)
  // DELETE to remove user by its
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/:id/friends/:friendId")
  // POST to add a new friend to a user's friend list
  .post(addFriend)
  // DELETE to remove a friend from a user's friend list
  .delete(removeFriend);

module.exports = router;
