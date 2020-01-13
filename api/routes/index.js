const express = require("express");
const router = express.Router();
const { database, Ingredient } = require("../database");

router
  .route("/")
  .get((req, res) => {
    res.sendStatus(200);
  })
  .post((req, res) => {});

module.exports = router;
