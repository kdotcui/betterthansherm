import React from "react";
import Carousel from "react-bootstrap/Carousel";
import RecipeImage from "./RecipeImage";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Recipe1CookingMode({ setCookingMode, directions, id }) {
  useEffect(() => {
    setCookingMode(true);
  });
  return (
    <div className="carousel">
      <Link className={"link-styles"} to={`/recipe${id}`}>
        X
      </Link>
      <Carousel>
        {directions.map((step, index) => (
          <Carousel.Item>
            <RecipeImage step={`Step ${index + 1}`} text={step} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Recipe1CookingMode;
