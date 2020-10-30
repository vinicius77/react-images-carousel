import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/crayon-bw.png" alt="Profile Pic" />
          </div>
          <div className="column right">
            <div className="text">
              My name is Vinicius and I'm a <span>Fullstack Developer</span>
            </div>
            <p>
              A top bloke dude that when isn't glued to his laptop screen,
              spends time outside playing football and working out, drawing,
              playing and listening to music, learning random stuff,
              skateboarding, watching repeated episodes of Two and a Half Men
              and Naruto Shippuden, reading and travelling. Also loves surfing
              but here in Finland it is such a hard task to accomplish.
            </p>
            <a href="/">Download my CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
