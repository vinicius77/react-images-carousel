import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navClassName, setClassName] = useState("navbar");

  /** Sets the navbar className according with the value of Y scroll position */
  const onScrollHandler = () => {
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 20) {
      setClassName("navbar sticky");
    } else {
      setClassName("navbar");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <nav className={navClassName === "navbar" ? navClassName : navClassName}>
      <div className="max-width">
        <div className="logo">
          <a href="/">
            Vinifo<span>lio</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/" data-after="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/" data-after="About">
              About
            </a>
          </li>
          <li>
            <a href="/" data-after="Services">
              Services
            </a>
          </li>
          <li>
            <a href="/" data-after="Skills">
              Skills
            </a>
          </li>
          <li>
            <a href="/" data-after="Team">
              Team
            </a>
          </li>
          <li>
            <a href="/" data-after="Contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-button">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
