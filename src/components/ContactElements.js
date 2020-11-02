import React from "react";

const ContactElements = ({ contact }) => {
  const { icon, head, subtitle } = contact;
  return (
    <React.Fragment>
      <div className="icons">
        <div className="row">
          <i className={icon}></i>
          <div className="info">
            <div className="head">{head}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactElements;
