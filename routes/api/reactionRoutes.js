const router = require("express").Router();
const {
  getReaction,
  getSingleReaction,
  createReaction,
} = require("../../controllers/reactionController");

// /api/users
router.route("/").get(getReaction).post(createReaction);

// /api/users/:userId
router.route("/:userId").get(getSingleReaction);

module.exports = router;