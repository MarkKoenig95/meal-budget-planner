import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";
import Ingredient from "./Ingredient";
import "./Ingredients.css";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    axios.get("/ingredients").then(response => {
      setIngredients(response.data);
    });
  });
  return (
    <div className="ingredients">
      <IngredientInput />
      {ingredients.map(ingredient => {
        return <Ingredient key={ingredient._id} ingredient={ingredient} />;
      })}
    </div>
  );
}

export default Ingredients;
