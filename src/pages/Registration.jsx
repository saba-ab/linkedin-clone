import React from "react";
import "../styles/registration.css";
import Logo from "../components/Logo";
import blueCircle from "../images/login-registration/blue-circle.svg";
import yellowCircle from "../images/login-registration/yellow-circle.svg";
import secBlueCircle from "../images/login-registration/large-blue-circle.svg";
import Button from "../components/Button";
import UserBirthDate from "../components/UserBirthDate";
import { useState } from "react";
import { app, isValidEmail, isValidPassword, footerListItems } from "../helper";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

function Registration() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const db = getFirestore();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = () => {
    if (!isValidEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }
    if (!isValidPassword(formData.password)) {
      setError("Password should be between 8 and 22 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
          fullName: formData.fullName,
        });

        setError("registered successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setError("invalid username");
            break;
          case "auth/invalid-login-credentials":
            setError("password is incorrect");
            break;
          default:
            setError(error.message);
            break;
        }
      });
    setFormData(" ");
  };
  // const setDateOfBirth = (updatedDate) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     dateOfBirth: updatedDate,
  //   }));
  // };

  return (
    <div className="registration-container">
      <Logo />
      <div className="registration-header">
        <h1>Tell us about you</h1>
      </div>
      <div className="registration-form">
        <form>
          <input
            type="text"
            name="fullName"
            id="name"
            placeholder="Enter full name"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <div className="date">
            <p style={{ color: "#747171", marginBottom: "10px" }}>
              Date of birth
            </p>
            <UserBirthDate
            // date={formData.dateOfBirth}
            // setDate={() => setDateOfBirth}
            />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </form>
        <div className="registration-buttons">
          <p>{error}</p>
          <Button text="Agree & Join" onClick={handleSubmit} />
          <Button text="Login" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className="policy" onClick={() => console.log(formData)}>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <span>User Agreement, Privacy Policy,</span> and{" "}
          <span>Cookie Policy</span>.
        </p>
      </div>
      <div className="registration-footer">
        <ul>
          {footerListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute-images">
        <img src={blueCircle} alt="circle" className="reg-blue-circle" />
        <img src={secBlueCircle} alt="circle" className="reg-sec-blue-circle" />
        <img src={yellowCircle} alt="circle" className="reg-yellow-circle" />
      </div>
    </div>
  );
}

export default Registration;
