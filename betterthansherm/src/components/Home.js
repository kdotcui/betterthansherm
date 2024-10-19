import React from "react";

import { Link } from "react-router-dom";
import r1 from "./images/recipe1.png";
import r2 from "./images/recipe2.png";
import r3 from "./images/recipe3.png";
import r4 from "./images/recipe4.png";
import r5 from "./images/recipe5.png";
import r6 from "./images/recipe1.png";
import r7 from "./images/recipe1.png";
/**
 * Landing page containing short bios for recipes, and <Link> to full recipes
 *
 */
function Home({ recipes }) {
  let images = [r1, r2, r3, r4, r5, r6, r7];
  return (
    <div className="home">
      <h1>Recipes</h1>
      {recipes.map((recipe, index) => (
        <div key={index} className="homepage">
          <div className="recipe-info">
            <h3 id="homeNames">
              <Link to={`/recipe${recipe.id}`}>{recipe.name}</Link>
            </h3>
            <ol>
              {recipe.directions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <div className="recipe-actions">
              <Link
                to={`/edit/${recipe.id}`}
                style={{
                  padding: "10px",
                  margin: "5px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(recipe.id)}
                style={{
                  padding: "10px",
                  margin: "5px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="recipe-image">
            <img
              src={index < images.length ? images[index] : images[0]}
              alt={`recipe${index}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
