// CategorySelector.js is a component that renders a dropdown menu for selecting a category.

import React from "react"; // React hooks allow you to use state and other React features without writing a class.

// Categories are hard-coded for now.
const categories = [
  { name: "Holiday", color: "gold" }, // `name` is the name of the category. `color` is the color of the category.
  { name: "Work", color: "lightblue" }, // `name` is the name of the category. `color` is the color of the category.
  { name: "Errands", color: "lightgreen" }, // `name` is the name of the category. `color` is the color of the category.
  { name: "Sick", color: "tomato" }, // `name` is the name of the category. `color` is the color of the category.
];

// export default function CategorySelector

export default function CategorySelector({ setSelectedCategory }) {
  // `setSelectedCategory` is a function that takes a category as a parameter.
  return (
    <div className="category-selector">
      {categories.map(
        (
          category,
          index //categories.map() is a map function, which takes two parameters: `category` and `index`.
        ) => (
          <button
            key={index}
            style={{ backgroundColor: category.color }}
            onClick={() => setSelectedCategory(category)} //onClick={() => setSelectedCategory(category)} is a function that takes a category as a parameter.
          >
            {category.name} {/* `category.name` is the name of the category. */}
          </button>
        )
      )}
    </div>
  );
}
