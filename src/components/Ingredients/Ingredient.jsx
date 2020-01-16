import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import IngredientDisplay from "./IngredientDisplay";

function Ingredient(props) {
  const [isDisplayed, setIsDisplayed] = useState(true);

  function toggleEditing() {
    setIsDisplayed(!isDisplayed);
  }

  return (
    <div className="ingredient">
      {isDisplayed ? (
        <IngredientDisplay
          onEditClicked={toggleEditing}
          ingredient={props.ingredient}
          refresh={props.refresh}
        />
      ) : (
        <IngredientInput
          edit={true}
          onExitClicked={toggleEditing}
          ingredient={props.ingredient}
          refresh={props.refresh}
        />
      )}
    </div>
  );
}

export default Ingredient;
