const { Reaction, Thought, User } = require("../models");

module.exports = {
  getReaction(req, res) {
    Reaction.find({})
      .select("-__v")
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },
  getSingleReaction(req, res) {
    Reaction.findOne({ _id: req.params.reactionId })
      .select("-__v")
      .then((tag) =>
        !tag
          ? res.status(404).json({ message: "No reaction with that ID" })
          : res.json(tag)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new tag
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => {
        return Reaction.findOneAndUpdate(
          { _id: req.body.thoughtId },
          { $addToSet: { tags: reaction._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Reaction created, but found no thought with that ID",
            })
          : res.json("Created the reaction 🎉")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
