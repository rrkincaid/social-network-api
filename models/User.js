const mongoose = require("mongoose");

const User = mongoose.model("User", userSchema);

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: String,
//   thoughts: { },
//   friends: {},
//   lastAccessed: { type: Date, default: Date.now },
// });

User.create(
  { username: "Rachel", email: "", thoughts: "", friends: "" },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = User;
