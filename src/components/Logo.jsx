import React from "react";
import logo from "../images/linkedin-logo.svg";
import "../styles/logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
