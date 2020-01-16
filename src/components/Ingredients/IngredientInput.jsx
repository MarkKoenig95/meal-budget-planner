import React, { useState, useEffect } from "react";
import axios from "axios";
import QtyInput from "../Inputs/QtyInput";
import "./IngredientInput.css";
import calculateQuantity from "../../logic/quantityInput";
const emptyIngredient = {
  name: "",
  cost: "",
  unit: "",
  location: ""
};

const emptyQty = {
  whole: 0,
  numerator: 0,
  denominator: 1,
  isFraction: false
};

var flag = "";

function IngredientInput(props) {
  const [ingredient, setIngredient] = useState(props.ingredient);
  const [qty, setQty] = useState(emptyQty);

  useEffect(() => {
    function addIngredient() {
      axios.post("/ingredients", ingredient).then(() => {
        props.refresh();
        setIngredient(emptyIngredient);
      });
    }

    function editIngredient() {
      let id = props.ingredient._id;
      axios.patch("/ingredients/" + id, ingredient).then(() => {
        props.refresh();
        props.onExitClicked();
      });
    }

    switch (flag) {
      case "":
        break;
      case "add":
        flag = "";
        addIngredient();
        break;
      case "edit":
        flag = "";
        editIngredient();
        break;
      default:
        console.log("Reached default in switch statement");
        break;
    }
  }, [ingredient, props]);

  function handleIngredientChange(event) {
    const { name, value } = event.target;

    if (name === "name") {
      filterIngredients();
    }

    setIngredient(prevValue => ({ ...prevValue, [name]: value }));
  }

  function handleQtyChange(event) {
    var { name, value } = event.target;

    if (name === "isFraction") {
      if (value === "false") {
        value = true;
      } else if (value === "true") {
        value = false;
      } else {
        value = !value;
      }
    }

    setQty(prevValue => ({ ...prevValue, [name]: value }));
  }

  function onAddClick() {
    flag = "add";
    calculateCost();
  }

  function onEditClick() {
    flag = "edit";
    calculateCost();
  }

  function filterIngredients() {
    //
  }

  function calculateCost() {
    let quantity = calculateQuantity(qty);
    if (quantity) {
      let newCost = ingredient.cost / quantity;
      newCost = newCost.toFixed(2);
      setIngredient(prevValue => {
        return { ...prevValue, cost: newCost };
      });
      setQty(emptyQty);
    } else {
      alert("Please enter a valid quantity value.");
    }
  }

  return (
    <div className="ingredient-input">
      <label className="basic-label">Ingredient Name</label>
      <input
        className="basic-input"
        name="name"
        value={ingredient.name}
        onChange={handleIngredientChange}
      />
      <label className="basic-label">Cost</label>
      <input
        className="basic-input"
        name="cost"
        value={ingredient.cost}
        onChange={handleIngredientChange}
      />
      <QtyInput qty={qty} onChange={handleQtyChange} />
      <label className="basic-label">Unit</label>
      <input
        className="basic-input"
        name="unit"
        value={ingredient.unit}
        onChange={handleIngredientChange}
      />
      <label className="basic-label">Location</label>
      <input
        className="basic-input"
        name="location"
        value={ingredient.location}
        onChange={handleIngredientChange}
      />
      <div className="buttons">
        <button
          className="input-add-button"
          onClick={props.edit ? onEditClick : onAddClick}
          style={!props.edit ? { display: "block", margin: "auto" } : {}}
        >
          +
        </button>
        {props.edit && (
          <button className="input-exit-button" onClick={props.onExitClicked}>
            x
          </button>
        )}
      </div>
    </div>
  );
}

export default IngredientInput;
