const express = require("express");
const db = require("./config/connection");
// Require model
const { User } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all departments
app.get("/id", (req, res) => {
  // Using model in route to find all ids that are instances of that model
  User.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
