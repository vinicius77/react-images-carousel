import React from "react";

const Service = ({ service }) => {
  const { iconName, text, description } = service;
  return (
    <div className="card">
      <div className="box">
        <i className={iconName}></i>
        <div className="text">{text}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
