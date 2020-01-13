const express = require("express");
const router = express.Router();
const { Ingredient } = require("../database");

router
  .route("/")
  .get((req, res) => {
    Ingredient.find((err, ingredients) => {
      if (!err) {
        res.send(ingredients);
      } else {
        console.log(err);
      }
    });
  })
  .post((req, res) => {
    console.log(req.body);

    var ingredient = new Ingredient(req.body);

    ingredient.save(err => {
      if (!err) {
        res.sendStatus(200);
      } else {
        console.log(err);
      }
    });
  });

router.route("/:ingredientId").delete((req, res) => {
  Ingredient.deleteOne({ _id: req.params.ingredientId }, err => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
