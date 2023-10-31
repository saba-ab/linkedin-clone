import React from "react";
import { useState } from "react";
function UserBirthDate({ date, setDate }) {
  const handleDayChange = (e) => {
    const day = e.target.value;
    setDate((prevState) => ({ ...prevState, day }));
  };

  const handleMonthChange = (e) => {
    const month = e.target.value;
    setDate((prevState) => ({ ...prevState, month }));
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setDate((prevState) => ({ ...prevState, year }));
  };
  const selectStyle = {
    width: "120px",
    padding: "0 20px",
    borderRadius: "43px",
    border: "1px solid #747171",
    height: "40px",
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="date-input" style={{ display: "flex", gap: "20px" }}>
      <select style={selectStyle}>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <select style={selectStyle}>
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>

      <select style={selectStyle}>
        {Array.from(
          { length: new Date().getFullYear() - 1950 + 1 },
          (_, i) => i + 1950
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserBirthDate;
