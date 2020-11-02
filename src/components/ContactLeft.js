import React from "react";
import { contactElements } from "../data.js";
import ContactElements from "./ContactElements";

const ContactLeft = () => {
  return (
    <div className="column left">
      <div className="text">Get in touch</div>
      <p>I would love to hear from you. Here is how you can reach me ...</p>

      {contactElements.map((contact, index) => (
        <ContactElements key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactLeft;
