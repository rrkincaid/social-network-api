const express = require("express");
const db = require("./config/config");
const routes = require("./routes");

// Require model
const { User, Thought } = require("./models");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Finds all users
app.get("/api/users", (req, res) => {
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

app.get("/api/users", (req, res) => {
  User.findOne({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/api/users", (req, res) => {
  User.createOne({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/api/users/:userId/friends/:friendId", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/api/thoughts", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/api/thoughts/:thoughtId/reactions", (req, res) => {
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
