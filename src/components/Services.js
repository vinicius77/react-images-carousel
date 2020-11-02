import React from "react";
import { services } from "../data.js";
import "./Services.css";
import Service from "./Service.js";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">
          My <span>Speciality</span>
        </h2>
        <div className="services-content">
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
