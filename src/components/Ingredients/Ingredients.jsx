import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";
import Ingredient from "./Ingredient";
import "./Ingredients.css";
const emptyIngredient = {
  name: "",
  cost: "",
  unit: "",
  location: ""
};

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(getIngredients, []);

  function getIngredients() {
    axios
      .get("/api/ingredients")
      .then(response => {
        console.log(response.data);

        setIngredients(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="ingredients">
      <div className="main-input">
        <IngredientInput
          refresh={getIngredients}
          ingredient={emptyIngredient}
          edit={false}
        />
      </div>
      {ingredients.map(ingredient => {
        return (
          <Ingredient
            key={ingredient._id}
            ingredient={ingredient}
            refresh={getIngredients}
          />
        );
      })}
    </div>
  );
}

export default Ingredients;
