import React from "react";
import "./Skills.css";
import { skills } from "../data.js";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">
          My <span>Skills</span>
        </h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">Soft Skills and Experiences</div>
            <p>
              Passionated about coding, great ability solving complex scenarios,
              excellent skills as a team member, a self-taught driven person,
              fast learner and very adaptive to any environment. The partners
              I've had the pleasure to work with would define me as a hard
              worker, honest, respectful, logical thinker, good listener,
              responsible, open-minded and someone who never gives up.
            </p>
          </div>

          <div className="column right">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
