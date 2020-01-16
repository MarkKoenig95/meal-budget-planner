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
    var ingredient = new Ingredient(req.body);

    ingredient.save(err => {
      if (!err) {
        res.sendStatus(200);
      } else {
        console.log(err);
      }
    });
  });

router
  .route("/:ingredientId")
  .put((req, res) => {
    Ingredient.update(
      { id: req.params.ingredientId },
      {
        name: req.body.name,
        cost: req.body.cost,
        unit: req.body.unit,
        location: req.body.location
      },
      { overwrite: true },
      err => {
        if (!err) {
          res.send("You have successfully updated this article!");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch((req, res) => {
    Ingredient.updateOne(
      { _id: req.params.ingredientId },
      { $set: req.body },
      err => {
        if (!err) {
          res.send("You have successfully updated this article!");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete((req, res) => {
    Ingredient.deleteOne({ _id: req.params.ingredientId }, err => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;
