require("dotenv").config();
const mongoose = require("mongoose");

var databaseName = "mealDB";
var globalMongoURL = `mongodb+srv://admin-mark:${process.env.PASSWORD}@cluster0-sdkut.mongodb.net/${databaseName}`;
var localMongoURL = `mongodb://localhost:27017/${databaseName}`;

mongoose.connect(localMongoURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const ingredientSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  qty: Number,
  unit: String,
  location: String
});

const Ingredient = new mongoose.model("Ingredient", ingredientSchema);

module.exports = {
  database: mongoose,
  Ingredient: Ingredient
};
