require("dotenv").config();
const mongoose = require("mongoose");

var databaseName = "mealDB";
var globalMongoURL = `mongodb+srv://admin-mark:${process.env.PASSWORD}@cluster0-sdkut.mongodb.net/${databaseName}`;
var localMongoURL = `mongodb://localhost:27017/${databaseName}`;

var mongoURL = process.env.NODE_ENV ? globalMongoURL : localMongoURL;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .catch(err => {
    console.log(err);
  });

const ingredientSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  unit: String,
  location: String
});

const Ingredient = new mongoose.model("Ingredient", ingredientSchema);

const userSchema = new mongoose.Schema({
  username: String,
  ingredients: [ingredientSchema]
});

const User = new mongoose.model("User", userSchema);

module.exports = {
  database: mongoose,
  Ingredient: Ingredient,
  User: User
};
