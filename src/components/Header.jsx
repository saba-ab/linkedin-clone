import React from "react";
import { Link } from "react-router-dom";
import defaultPic from "../images/feed/defaultPic.jpeg";
import logo from "../images/linkedin-logo.svg";
function Header({ destination }) {
  return (
    <div className="header-wrapper">
      <div className="linkedin-header">
        <div className="logo-and-search">
          <img src={logo} alt="logo" />
          <input
            type="text"
            style={destination === "feed" ? { display: "none" } : {}}
          />
        </div>
        <div className="header-navigation">
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">My Network</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Messaging</Link>
            </li>
            <li>
              <Link to="#">Notifications</Link>
            </li>
            <li>
              <Link to="#">
                <img src={defaultPic} alt="profile" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
