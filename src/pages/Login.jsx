import React from "react";
import "../styles/login.css";
function Login() {
  return (
    <div className="login-container">
      <div className="header">
        <h1>Make the most of your professional life</h1>
      </div>
      <div className="login-form">
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email or telephone number"
          />
          <input
            type="password"
            placeholder="Password (6 or more characters)"
          />
        </form>
        <div className="policy">
          <p>
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span>User Agreement, Privacy Policy,</span> and{" "}
            <span>Cookie Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
