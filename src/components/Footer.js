import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      Reinvigorated by{" "}
      <span>
        <a
          href="https://www.github.com/vinicius77"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Primeape Coder{" "}
        </a>
      </span>
      <i className="fas fa-copyright"></i> | 2020 - All rights reserved.
    </footer>
  );
};

export default Footer;
