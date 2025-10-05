import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">FabiPorto</h2>
          <p>
             I’m Fabianus Jandito, a 3rd-year Computer Science student at Binus University, 
                passionate about software engineering and building impactful applications.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FabiPorto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
