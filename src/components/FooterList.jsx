import React from "react";
import { footerListItems } from "../helper";
import { Link } from "react-router-dom";
function FooterList() {
  return (
    <div className="login-footer">
      <ul>
        {footerListItems.map((item, index) => (
          <li key={index}>
            <Link to={"#"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
