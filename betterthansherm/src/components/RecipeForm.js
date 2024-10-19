// RecipeForm.js
import React, { useState } from "react";
import axios from "axios";

const RecipeForm = ({ recipes }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [directionInput, setDirectionInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: `${recipes.length + 1}`,
      name: recipeName,
      ingredients: ingredientInput.split(","),
      directions: directionInput.split(","),
    };

    try {
      axios
        .post("/api/recipes", newRecipe)
        .then((response) => {
          console.log("Recipe added successfully:", response.data);
          setRecipeName("");
          setIngredientInput("");
          setDirectionInput("");
          //window.location.reload();
        })
        .catch((error) => {
          console.error("Error adding recipe:", error);
        });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Recipe</button>
      </form>
      <h1>All recipes</h1>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.name}</h3>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <ol>
            {recipe.directions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RecipeForm;
