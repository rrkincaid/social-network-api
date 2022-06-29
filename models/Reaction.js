const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  toJSON: {
    // virtuals: true,
  },
});

// const Reaction = model("reaction", reactionSchema);

module.exports = reactionSchema;

// const reaction = new Thought({
//   reactionId: "",
//   reactionBody: "",
//   username: "",
//   createdAt: "",
// });
