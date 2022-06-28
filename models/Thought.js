const { Schema, model } = require("mongoose");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
    },
    thoughtText: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reaction: [
      {
        type: Schema.Types.ObjectId,
        ref: "reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reaction.length;
  });

// Initialize our Post model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;

// const thoughtSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   thoughtText: String,
//   createdAt: { type: Date, default: Date.now },
//   username: String,
//   reactions:
//   lastAccessed: { type: Date, default: Date.now },
// });

// Thought.create(
//   {
//     thoughtText: "",
//     createdAt: "",
//     username: "",
//     reactions: user_id,
//     //reactionId, reactionBody, username, createdAt
//   },
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//   }
// );

// module.exports = Thought;
