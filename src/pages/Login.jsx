import React, { useState } from "react";
import "../styles/login.css";
import { footerListItems } from "../helper";
import workshopLeftImg from "../images/login-registration/workspace-left.svg";
import workshopRightImg from "../images/login-registration/workspace.svg";
import blueCircle from "../images/login-registration/blue-circle.svg";
import yellowCircle from "../images/login-registration/yellow-circle.svg";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const log = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        console.log(user);
        navigate("/feed");
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setLoginError("invalid username");
            break;
          case "auth/invalid-login-credentials":
            setLoginError("password is incorrect");
            break;
          default:
            setLoginError(error.message);
            break;
        }
      });
  };
  return (
    <div className="login-container">
      <Logo />
      <div className="header">
        <h1>Make the most of your professional life</h1>
      </div>
      <div className="login-form">
        <form>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email or telephone number"
            onChange={handleEmail}
          />
          <input
            value={password}
            type="password"
            placeholder="Password (6 or more characters)"
            onChange={handlePassword}
          />
        </form>
        <div className="policy">
          <p>
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span>User Agreement, Privacy Policy,</span> and{" "}
            <span>Cookie Policy</span>.
          </p>
        </div>
        <div className="login-button">
          <p>{loginError}</p>
          <Button text="Login" onClick={log} />
          <Button text="Register" onClick={() => navigate("/registration")} />
        </div>
      </div>
      <div className="login-footer">
        <ul>
          {footerListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute-images">
        <img src={workshopLeftImg} alt="circle" className="workshop-left" />
        <img src={workshopRightImg} alt="circle" className="workshop-right" />
        <img src={blueCircle} alt="circle" className="blue-circle" />
        <img src={yellowCircle} alt="circle" className="yellow-circle" />
      </div>
    </div>
  );
}

export default Login;
