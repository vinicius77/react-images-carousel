import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/crayon-bw.png" alt="Profile Pic" />
          </div>
          <div className="column right">
            <div className="text">
              My name is Vinicius and I'm a <span>Fullstack Developer</span>
            </div>
            <p>
              A passionate developer who when isn't glued to Ubunta's screen
              (his laptop), spends time playing football, drawing, learning
              Finnish and trying to be always updated with the most recent
              technologies. Currently resides in Helsinki with his wife Hanna
              and fulfill her life with tons of geek stuff and stickers.
            </p>
            <a href="/">Download my CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
