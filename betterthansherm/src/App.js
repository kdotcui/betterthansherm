import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import OurTeam from "./components/OurTeam";
import GroceryList from "./components/GroceryList";
import { Routes, Route } from "react-router-dom";
import CookingMode from "./components/CookingMode";
import axios from "axios";
import RecipeForm from "./components/RecipeForm";
import NutritionalInfo from "./components/NutritionalInfo";
import EditRecipe from "./components/EditRecipe";

/**
 * Renders the Skeleton(header,navbar,footer) of the Website page
 * and includes Routing to different pages
 *
 * @returns {jsx.element} the rendered homepage component.
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cookingMode: false,
      recipes: [],
    };
  }

  handleDelete = (id) => {
    axios
      .delete(`/api/recipes/${id}`)
      .then(() => {
        alert("Recipe deleted successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error deleting the recipe:", error);
        alert("Failed to delete the recipe.");
      });
  };

  componentDidMount() {
    axios.get("/api/recipes").then((response) => {
      this.setState({ recipes: response.data });
    });
  }

  render() {
    const setCookingMode = (value) => {
      this.setState({ cookingMode: value });
      return;
    };

    const setItems = (value) => {
      this.setState({ items: value });
      return;
    };
    return (
      <div>
        <Header cookingMode={this.state.cookingMode} />
        <NavigationBar cookingMode={this.state.cookingMode} />
        <Routes>
          <Route path="/" element={<Home recipes={this.state.recipes} />} />
          {this.state.recipes.map((recipe) => (
            <Route
              path={`/recipe${recipe.id}`}
              element={
                <Recipe
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  directions={recipe.directions}
                  id={recipe.id}
                  setCookingMode={setCookingMode}
                />
              }
            />
          ))}
          <Route path="/ourteam" element={<OurTeam />} />
          {this.state.recipes.map((recipe) => (
            <Route
              path={`/cookingModeRecipe${recipe.id}`}
              element={
                <CookingMode
                  setCookingMode={setCookingMode}
                  directions={recipe.directions}
                  id={recipe.id}
                />
              }
            />
          ))}
          {this.state.recipes.map((recipe) => (
            <Route
              path={`/nutritionalInfo${recipe.id}`}
              element={<NutritionalInfo ingredients={recipe.ingredients} />}
            />
          ))}
          <Route
            path="/groceries"
            element={
              <GroceryList items={this.state.items} setItems={setItems} />
            }
          />
          <Route
            path="/recipeform"
            element={<RecipeForm recipes={this.state.recipes} />}
          />

          {this.state.recipes.map((recipe) => (
            <Route
              path={`/edit/${recipe.id}`}
              element={<EditRecipe recipe={recipe} />}
            />
          ))}

          <Route
            path="/"
            element={
              <Home recipes={this.state.recipes} onDelete={this.handleDelete} />
            }
          />
        </Routes>
        <Footer cookingMode={this.state.cookingMode} />
      </div>
    );
  }
}
