const router = require("express").Router();
const {
  getSingleThought,
  getThought,
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThought).post(createThought);

router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

module.exports = router;
