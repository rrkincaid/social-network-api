const mongoose = require("mongoose");
const thoughtSchema = require("./Thought");

const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
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

const User = mongoose.model("User", userSchema);

module.exports = User;

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: String,
//   thoughts: { },
//   friends: {},
//   lastAccessed: { type: Date, default: Date.now },
// });

// User.create(
//   { username: "Rachel", email: "", thoughts: "", friends: "" },
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//   }
// );
