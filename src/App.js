import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    const positionY = window.pageYOffset;

    setScrollPosition(positionY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    let navbar = document.querySelector(".navbar");

    if (scrollPosition > 20) {
      navbar.className = "navbar sticky";
    } else {
      navbar.className = "navbar";
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollPosition]);

  return (
    <React.Fragment>
      <div className="App" onScroll={() => scrollHandler()}>
        <Navbar />
        <Home />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium dolores id pariatur totam. Beatae, nobis vero? Accusantium
          numquam asperiores beatae facilis ducimus praesentium totam doloremque
          voluptatibus sapiente dolores vero cumque, tempora unde sint autem,
          corporis minus recusandae! Quam odio quas nihil quidem? Iste ea
          accusamus, numquam necessitatibus magni quas.
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
