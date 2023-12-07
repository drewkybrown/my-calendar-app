// Calendar.js is a component that renders a calendar with the current month and year.
// It also renders a list of events for the current month.
// This is my main component for this project.

import React, { useState } from "react"; // React hooks
import CalendarCell from "./CalendarCell"; // CalendarCell.js is a component that renders a single cell in the calendar.
import CaatgorySelector from "./CategorySelector"; // CategorySelector.js is a component that renders a dropdown menu for selecting a category.

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // Array of days of the week
const dates = Array.from({ length: 28 }, (_, i) => i + 1); // Array of dates in the month
// Array.from() creates a new, shallow-copied Array instance from an array-like or iterable object.
// { length: 28 } This is the array-like object. It's an object with a single property `length` set to 28.
// 1. This tells `Array.from` to create an array with 28 elements.
// Array.from` is a map function, which takes two parameters: `(_, i)`.
// The underscore `_` is a convention in JavaScript to indicate that the parameter is not being used.
// (in this case, the current element, which doesn't exist yet). `i` represents the index of the current element.

// export default function Calendar

export default function Calendar() {
  const [selectedCategory, setSelectedCategory] = useState("null"); // React hook
  // `selectedCategory` is the current value of the dropdown menu.
  const [cellColors, setCellColors] = useState({}); // React hook
  // `cellColors` is an object that maps dates to colors.

  const handleCellClick = (date) => {
    if (selectedCategory) {
      setCellColors({ ...cellColors, [date]: selectedCategory });
      // `handleCellClick` is a function that takes a date as a parameter.
    }
  };
}
