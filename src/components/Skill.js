import React from "react";

const Skill = ({ skill }) => {
  const { tech, porcentage } = skill;

  const spanText = `${porcentage} %`;
  const className = `line ${tech}`;

  return (
    <div className="bars">
      <div className="info">
        <span className="tech">{tech}</span>
        <span>{spanText}</span>
      </div>
      <div className={className}></div>
    </div>
  );
};

export default Skill;
