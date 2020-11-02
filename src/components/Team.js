import React from "react";
import "./Team.css";
import Carousel from "./Carousel";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="max-width">
        <h2 className="title">
          My <span>Team</span>
        </h2>
        <Carousel />
      </div>
    </section>
  );
};

export default Team;
