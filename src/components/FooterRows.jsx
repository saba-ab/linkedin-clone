import React from "react";
import { linkedInSections } from "../helper";
function FooterRows() {
  return (
    <div className="footer-container">
      {linkedInSections.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterRows;
