import React from "react";
import "./Footer.css";

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <p>{name ? `My name is ${name}, and today I'm learning about react` : "Today I'm Learning React"}</p>
      </div>
      <div className="footer__content"></div>
    </footer>
  );
};

export default Footer;
