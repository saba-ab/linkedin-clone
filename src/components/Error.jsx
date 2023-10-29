import React from "react";
import "../styles/login.css";
import jim from "../images/login-registration/jiaijoo.png";
function Error() {
  return (
    <div className="error-page">
      <img src={jim} alt="carrey" />
      <h1>404 - Not Found</h1>
      <button>back to login</button>
    </div>
  );
}

export default Error;
