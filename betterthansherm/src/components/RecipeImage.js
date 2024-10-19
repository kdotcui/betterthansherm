import React from "react";

function RecipeImage({ step, text }) {
  return (
    <div className="carousel-box">
      <h1>{step}</h1>
      <p>{text}</p>
    </div>
  );
}

export default RecipeImage;
