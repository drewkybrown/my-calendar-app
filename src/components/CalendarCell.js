// CalendarCell.js
// Path: src/components/CalendarCell.js
// Compare this snippet from src/components/Calendar.js:
// represents a single cell in the calendar.
import React from "react"; // React hooks allow you to use state and other React features without writing a class.

// export default function CalendarCell

export default function CalendarCell({ day, date, color, onClick }) {
  return (
    <div
      className="calendar-cell"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <p>{day}</p>
      <p>{date}</p>
    </div>
  );
}
