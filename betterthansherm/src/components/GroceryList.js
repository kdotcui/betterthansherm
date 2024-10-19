import React from "react";
import { useState } from "react";

/**
 * Grocery list keeping track of the ingredients added by the user
 */
function GroceryList({ items, setItems }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const clear = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item"
        />
        <button onClick={addItem}>Add</button>
        <button onClick={clear}>Clear All</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
