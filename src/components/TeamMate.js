import React from "react";
import Emoji from "./Emoji";
import "./TeamMate.css";

const TeamMate = ({ teamMate }) => {
  const { imagePath, fullName, emoji, description } = teamMate;

  return (
    <div className="card">
      <div className="box">
        <img src={imagePath} alt="perfil-pic" />
        <div className="text">
          {fullName} <Emoji symbol={emoji} label="brazil-flag" />
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMate;
