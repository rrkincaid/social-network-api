const mongoose = require("mongoose");

const Thought = mongoose.model("Thought", thoughtSchema);

Thought.create(
  {
    thoughtText: "",
    createdAt: "",
    username: "",
    reactions: user_id,
    //reactionId, reactionBody, username, createdAt
  },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

const reaction = new Thought({
  reactionId: "",
  reactionBody: "",
  username: "",
  createdAt: "",
});

reaction.getDocumentInfo();

module.exports = Thought;
