const express = require("express");
const router = express.Router();
const path = require("path");
const { database, Ingredient } = require("../database");

router
  .route("/")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  .post((req, res) => {});

module.exports = router;
