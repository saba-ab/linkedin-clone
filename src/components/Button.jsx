import React from "react";
import "../styles/button.css";
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="button"
      style={
        text === "Login"
          ? { backgroundColor: "#0077b7" }
          : { backgroundColor: "#00b71b" }
      }
    >
      {text}
    </button>
  );
}

export default Button;
