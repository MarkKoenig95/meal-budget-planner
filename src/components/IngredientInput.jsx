import React, { useState } from "react";
import axios from "axios";
import "./IngredientInput.css";

function IngredientInput() {
  const [ingredient, setIngredient] = useState({
    name: "",
    cost: "",
    qty: "",
    unit: "",
    location: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
    }

    setIngredient(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  function addIngredient() {
    console.log(ingredient);

    axios.post("/ingredients", ingredient);
  }

  function filterIngredients() {
    //
  }

  return (
    <div className="ingredient-input">
      <label>Ingredient Name</label>
      <input name="name" value={ingredient.name} onChange={handleChange} />

      <label>Cost</label>
      <input name="cost" value={ingredient.cost} onChange={handleChange} />

      <label>Quantity</label>
      <input name="unit" value={ingredient.qty} onChange={handleChange} />

      <label>Unit</label>
      <input name="unit" value={ingredient.unit} onChange={handleChange} />

      <label>Location</label>
      <input
        name="location"
        value={ingredient.location}
        onChange={handleChange}
      />
      <button onClick={addIngredient}>+</button>
    </div>
  );
}

export default IngredientInput;
