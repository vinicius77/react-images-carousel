import React from "react";
import "./Contact.css";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">
          Contact <span>Me</span>
        </h2>
        <div className="contact-content">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
