import React from "react";
import r1 from "./images/recipe1.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Recipe({ name, ingredients, directions, id, setCookingMode }) {
  useEffect(() => {
    setCookingMode(false);
  });
  return (
    <div className="recipe-body">
      <div className="group">
        <h1>{name}</h1>
        <img src={r1} alt="recipe1" />
        Ingredients:
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h4>Directions:</h4>
        <ol>
          {directions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <h4>
        <Link to={`/cookingModeRecipe${id}`}>Cooking Mode</Link>
      </h4>
      <h4>
        <Link to={`/nutritionalInfo${id}`}>Nutritional Info</Link>
      </h4>
    </div>
  );
}

export default Recipe;
