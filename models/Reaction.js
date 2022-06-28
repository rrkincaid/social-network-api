const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionName: {
    type: String,
    required: true,
  },
  createdAt: Date,
  toJSON: {
    virtuals: true,
  },
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;

// const reaction = new Thought({
//   reactionId: "",
//   reactionBody: "",
//   username: "",
//   createdAt: "",
// });
