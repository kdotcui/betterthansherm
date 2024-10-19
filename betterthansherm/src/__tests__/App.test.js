// App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Recipe from "../components/Recipe";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('HomePage', () => {
  const mockRecipes = [
    {
      id: 1,
      name: "Pepper and Chorizo Rice",
      ingredients: [
        "6 ounces fully-cooked chorizo, casings removed, chopped",
        "1 red bell pepper, finely chopped",
        "1 small onion, thinly sliced",
        "2 cups long-grain rice"
      ],
      directions: [
        "Whisk the olive oil, sherry, paprika, garlic, 1/2 teaspoon salt, and a few grinds of black pepper in a medium bowl. Fold in the shrimp until combined. Set aside.",
        "Add the chorizo to a 6-quart rice cooker, followed by the red pepper and then the onion. Top with the rice, red pepper flakes, 1/2 teaspoon salt, and a few grinds of black pepper. Pour in 3 cups of water, then place the shrimp on top, making sure all the garlicky oil from the bowl gets into the cooker. Put the lid on the rice cooker and cook according to the manufacturer's instructions. (Depending on your rice cooker, this should take 30 to 35 minutes. If your rice cooker has not turned off after 30 minutes, remove the shrimp, place the lid back on the rice cooker, and continue cooking until the machine indicates the cycle is complete.)",
        "Use tongs to remove the shrimp to a plate. Fold the parsley and lemon juice into the rice mixture, making sure to mix up the ingredients from the bottom of the pot, until everything is well combined. Spoon the rice into bowls, top with the shrimp, sprinkle with some parsley, and serve with a squeeze of lemon, if desired."
      ]
    },
  ];
  it('Home Renders recipe name, instruction, and ingredients', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home recipes={mockRecipes} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Pepper and Chorizo Rice")).toBeInTheDocument();
    expect(screen.getByText("Whisk the olive oil, sherry, paprika, garlic, 1/2 teaspoon salt, and a few grinds of black pepper in a medium bowl. Fold in the shrimp until combined. Set aside.")).toBeInTheDocument();
    
  });

});

describe('Recipes Page', () => {
  const mockRecipes = [
    {
      id: 1,
      name: "Pepper and Chorizo Rice",
      ingredients: [
        "6 ounces fully-cooked chorizo, casings removed, chopped",
        "1 red bell pepper, finely chopped",
        "1 small onion, thinly sliced",
        "2 cups long-grain rice"
      ],
      directions: [
        "Whisk the olive oil, sherry, paprika, garlic, 1/2 teaspoon salt, and a few grinds of black pepper in a medium bowl. Fold in the shrimp until combined. Set aside.",
        "Add the chorizo to a 6-quart rice cooker, followed by the red pepper and then the onion. Top with the rice, red pepper flakes, 1/2 teaspoon salt, and a few grinds of black pepper. Pour in 3 cups of water, then place the shrimp on top, making sure all the garlicky oil from the bowl gets into the cooker. Put the lid on the rice cooker and cook according to the manufacturer's instructions. (Depending on your rice cooker, this should take 30 to 35 minutes. If your rice cooker has not turned off after 30 minutes, remove the shrimp, place the lid back on the rice cooker, and continue cooking until the machine indicates the cycle is complete.)",
        "Use tongs to remove the shrimp to a plate. Fold the parsley and lemon juice into the rice mixture, making sure to mix up the ingredients from the bottom of the pot, until everything is well combined. Spoon the rice into bowls, top with the shrimp, sprinkle with some parsley, and serve with a squeeze of lemon, if desired."
      ]
    },
  ];
  it('Recipe page displays name, instruction, and ingredients', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/recipe1" 
            element={
              <Recipe
              name={mockRecipes[0].name}
              ingredients={mockRecipes[0].ingredients}
              directions={mockRecipes[0].directions}
              id={1}
              setCookingMode={false}
            />} />s
        </Routes>
      </MemoryRouter>
    );
  });
});


//testing if the app renders without crashing

describe('Nutritional Info', () => {
  const mockRecipes = [
    {
      id: 1,
      name: "Pepper and Chorizo Rice",
      ingredients: [
        "6 ounces fully-cooked chorizo, casings removed, chopped",
        "1 red bell pepper, finely chopped",
        "1 small onion, thinly sliced",
        "2 cups long-grain rice"
      ],
      directions: [
        "Whisk the olive oil, sherry, paprika, garlic, 1/2 teaspoon salt, and a few grinds of black pepper in a medium bowl. Fold in the shrimp until combined. Set aside.",
        "Add the chorizo to a 6-quart rice cooker, followed by the red pepper and then the onion. Top with the rice, red pepper flakes, 1/2 teaspoon salt, and a few grinds of black pepper. Pour in 3 cups of water, then place the shrimp on top, making sure all the garlicky oil from the bowl gets into the cooker. Put the lid on the rice cooker and cook according to the manufacturer's instructions. (Depending on your rice cooker, this should take 30 to 35 minutes. If your rice cooker has not turned off after 30 minutes, remove the shrimp, place the lid back on the rice cooker, and continue cooking until the machine indicates the cycle is complete.)",
        "Use tongs to remove the shrimp to a plate. Fold the parsley and lemon juice into the rice mixture, making sure to mix up the ingredients from the bottom of the pot, until everything is well combined. Spoon the rice into bowls, top with the shrimp, sprinkle with some parsley, and serve with a squeeze of lemon, if desired."
      ]
    },
  ];
  it('Recipe page displays name, instruction, and ingredients', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/recipe1" 
            element={
              <Recipe
              name={mockRecipes[0].name}
              ingredients={mockRecipes[0].ingredients}
              directions={mockRecipes[0].directions}
              id={1}
              setCookingMode={false}
            />} />s
        </Routes>
      </MemoryRouter>
    );
  });
});


//testing if the app renders without crashing
it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});



/** 
// Testing home page route


//testing recipe1 route
it("renders Recipe1 at /recipe1", () => {
  render(
    <MemoryRouter initialEntries={["/recipe1"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Ingredients:")).toBeInTheDocument();
  expect(
    screen.getByText("6 ounces fully-cooked chorizo, casings removed, chopped")
  ).toBeInTheDocument();
});

//testing recipe2 route
it("renders Recipe2 at /recipe2", () => {
  render(
    <MemoryRouter initialEntries={["/recipe2"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe2
});

//testing recipe3 route
it("renders Recipe3 at /recipe3", () => {
  render(
    <MemoryRouter initialEntries={["/recipe3"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe3
});

//testing recipe4 route
it("renders Recipe4 at /recipe4", () => {
  render(
    <MemoryRouter initialEntries={["/recipe4"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe4
});

//testing recipe5 route
it("renders Recipe5 at /recipe5", () => {
  render(
    <MemoryRouter initialEntries={["/recipe5"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe5
});

//testing recipe6 route
it("renders Recipe6 at /recipe6", () => {
  render(
    <MemoryRouter initialEntries={["/recipe6"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe6
});

//testing recipe7 route
it("renders Recipe7 at /recipe7", () => {
  render(
    <MemoryRouter initialEntries={["/recipe7"]}>
      <App />
    </MemoryRouter>
  );
  // Add assertions specific to Recipe7
});

//Testing grocery list route
it("renders the grocery list", () => {
  render(
    <MemoryRouter initialEntries={["/groceries"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Better Than Sherm")).toBeInTheDocument();
  expect(screen.getByText("Clear All")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
});
describe("GroceryList", () => {
  test('should add item when add button is clicked and clear all items when "Clear All button is clicked', () => {
    const mockSetItems = jest.fn();
    const mockItems = ["item1", "item2"];

    render(<GroceryList items={mockItems} setItems={mockSetItems} />);

    const inputElement = screen.getByPlaceholderText("Enter an item");
    const addButton = screen.getByText("Add");

    fireEvent.change(inputElement, { target: { value: "new item" } });
    fireEvent.click(addButton);

    expect(mockSetItems).toHaveBeenCalledWith([...mockItems, "new item"]);
    expect(inputElement.value).toBe("");

    const clearAllButton = screen.getByText("Clear All");
    fireEvent.click(clearAllButton);

    expect(mockSetItems).toHaveBeenCalledWith([]);
  });
});

describe('CookingMode', () => {
    it("renders the recipe1cookingMode", () => {
      render(
        <MemoryRouter initialEntries={["/recipe1cookingmode"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });


    it("renders the recipe2cookingMode", () => {
      render(
        <MemoryRouter initialEntries={["/recipe2cookingmode"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("Step 2")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });

    it("renders the recipe7cookingMode", () => {
      render(
        <MemoryRouter initialEntries={["/recipe7cookingmode"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByText("Add the chorizo to a 6-quart rice cooker, followed by the red pepper and then the onion. Top with the rice, red pepper flakes, 1/2 teaspoon salt, and a few grinds of black pepper. Pour in 3 cups of water, then place the shrimp on top, making sure all the garlicky oil from the bowl gets into the cooker. Put the lid on the rice cooker and cook according to the manufacturer's instructions. (Depending on your rice cooker, this should take 30 to 35 minutes. If your rice cooker has not turned off after 30 minutes, remove the shrimp, place the lid back on the rice cooker, and continue cooking until the machine indicates the cycle is complete.)")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });
});

*/