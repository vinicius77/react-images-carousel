import React from "react";
import "./Home.css";
import LinkTo from "./LinkTo";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">
            Hi, I am<span></span>
          </div>
          <div className="text-2">
            Vinicius C. Bonifácio<span></span>
          </div>
          <div className="text-3">
            The <strong>Fullstack</strong> Developer<span></span>
          </div>
          <LinkTo
            to={"mailto:vinicius.bonifacio1985@gmail.com"}
            children={"Hire Me"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
