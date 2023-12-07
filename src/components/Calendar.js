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
