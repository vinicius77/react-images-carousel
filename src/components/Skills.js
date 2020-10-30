import React from "react";
import "./Skills.css";

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
            <div className="bars">
              <div className="info">
                <span>Frontend</span>
                <span>85%</span>
              </div>
              <div className="line frontend"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>GraphQL</span>
                <span>50%</span>
              </div>
              <div className="line graphql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span>65%</span>
              </div>
              <div className="line mongodb"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>40%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Redux</span>
                <span>40%</span>
              </div>
              <div className="line redux"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
