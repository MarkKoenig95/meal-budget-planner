import React from "react";
import axios from "axios";
var cur = "¥";

function Ingredient(props) {
  function deleteIngredient() {
    let id = props.ingredient._id;

    axios.delete("/ingredients/" + id).catch(error => {
      console.log(error);
    });
  }
  return (
    <div className="ingredient">
      <strong>{props.ingredient.name}:</strong>
      <p>
        {props.ingredient.cost} {cur} / {props.ingredient.unit} at{" "}
        {props.ingredient.location}
      </p>
      <button onClick={deleteIngredient}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Ingredient;
