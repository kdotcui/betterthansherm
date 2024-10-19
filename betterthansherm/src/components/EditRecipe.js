import React, { useState } from "react";
import axios from "axios";

function EditRecipe({ recipe }) {
  const [recipeName, setRecipeName] = useState(`${recipe.name}`);
  const [ingredientInput, setIngredientInput] = useState(
    `${recipe.ingredients}`
  );
  const [directionInput, setDirectionInput] = useState(`${recipe.directions}`);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: `${recipe.id}`,
      name: recipeName,
      ingredients: ingredientInput.split(","),
      directions: directionInput.split(","),
    };
    try {
      axios
        .post(`/api/recipes/${recipe.id}`, updatedRecipe)
        .then((response) => {
          console.log(response);
          alert("Recipe updated successfully!");
          //window.location.reload();
        })
        .catch((error) => {
          console.error("There was an error updating the recipe:", error);
          alert("Failed to update the recipe.");
        });
    } catch (error) {
      alert("Invalid JSON data");
    }
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSave}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />
        </label>
        <label>
          Directions:
          <input
            type="text"
            value={directionInput}
            onChange={(e) => setDirectionInput(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditRecipe;
