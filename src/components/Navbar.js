import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navClassName, setClassName] = useState("navbar");

  const onScrollHandler = () => {
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 20) {
      setClassName("sticky");
    } else {
      setClassName("navbar");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <nav className={navClassName === "navbar" ? navClassName : "navbar sticky"}>
      <div className="max-width">
        <div className="logo">
          <a href="/">
            Vinifo<span>lio</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
