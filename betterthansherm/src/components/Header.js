import veggies from "./images/veggies.png";
import React from "react";

/**
 * Header Element
 * Contains a Header-top and a header-body section
 */

function Header({ cookingMode }) {
  if (cookingMode) {
    return null;
  }
  return (
    <header className="Header">
      <section id="header-top">
        <h1>BETTER THAN SHERMAN</h1>
        <a href="#footersocials">Contact Us</a>
      </section>
      <section id="header-body">
        <div>
          <img src={veggies} id="header-img" alt="Recipe 1" />
        </div>
        <div>
          <h2>You are what you eat!</h2>
          <p>
            Tired of eating food you don’t like? You should try cooking your
            own. Healthy, filling and delicious food. Eat better and live
            better.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
