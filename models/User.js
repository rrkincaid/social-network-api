const mongoose = require("mongoose");

const User = mongoose.model("User", userSchema);

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
