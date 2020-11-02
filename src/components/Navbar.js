import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navClassName, setClassName] = useState("navbar");
  const [isToggle, setIsToggle] = useState(true);

  /** Toggles the hamburger menu along with the ternary operation condition */
  const onToggleHandler = () => {
    setIsToggle(!isToggle);
  };

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
        <ul className={isToggle ? "menu" : "menu active"}>
          <li>
            <a href="#home" onClick={() => onToggleHandler()} data-after="Home">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => onToggleHandler()}
              data-after="About"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => onToggleHandler()}
              data-after="Services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => onToggleHandler()}
              data-after="Skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => onToggleHandler()} data-after="Team">
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => onToggleHandler()}
              data-after="Contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-button" onClick={() => onToggleHandler()}>
          <i className={isToggle ? "fas fa-bars" : "fas fa-bars active"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
