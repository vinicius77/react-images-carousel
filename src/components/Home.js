import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hi, I am</div>
          <div className="text-2">Vinicius C. Bonifácio</div>
          <div className="text-3">
            The <span>Fullstack</span> Engineer
          </div>
          <a href="/">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
