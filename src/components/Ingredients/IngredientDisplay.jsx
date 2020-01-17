import React from "react";
import axios from "axios";
var cur = "¥";

function IngredientDisplay(props) {
  function deleteIngredient() {
    let id = props.ingredient._id;

    axios
      .delete("/api/ingredients/" + id)
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        props.refresh();
      });
  }

  return (
    <div className="ingredient-display">
      <strong>{props.ingredient.name}:</strong>
      <p>
        {props.ingredient.location}: {props.ingredient.cost} {cur} /{" "}
        {props.ingredient.unit}
      </p>
      <button className="delete-button" onClick={deleteIngredient}>
        <i className="fas fa-trash"></i>
      </button>
      <button className="edit-button" onClick={props.onEditClicked}>
        <i className="far fa-edit"></i>
      </button>
    </div>
  );
}

export default IngredientDisplay;
