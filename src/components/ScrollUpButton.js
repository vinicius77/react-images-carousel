import React, { useEffect, useState } from "react";
import "./ScrollUpButton.css";

const ScrollUpButton = () => {
  const [scrollClassName, setScrollClassName] = useState("scroll-up-button");

  /** Scroll Top when an vent is triggered */
  const onClickHandler = event => {
    event.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  /** Hides or show the arrow button based in the scroll Y position. (Changes the class name) */
  const onScrollHandler = () => {
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled > 570) {
      setScrollClassName("scroll-up-button show");
    } else {
      setScrollClassName("scroll-up-button");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <div
      className={scrollClassName ? scrollClassName : ""}
      onClick={e => onClickHandler(e)}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  );
};

export default ScrollUpButton;
