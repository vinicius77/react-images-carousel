import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="title">
        My <span>Speciality</span>
      </h2>
      <div className="max-width">
        <div className="services-content">
          {/** Card 1  */}
          <div className="card">
            <div className="box">
              <i className="fas fa-sitemap"></i>
              <div className="text">Frontend Stack</div>
              <p>
                HTML for creating websites and apps along with CSS for
                describing the visual presentation like layouts, colours and
                fonts and Javascript for making these pages interactive and
                dynamic.
              </p>
            </div>
          </div>
          {/** Card 2  */}
          <div className="card">
            <div className="box">
              <i class="fas fa-atom"></i>

              <div className="text">Libraries and Frameworks</div>
              <p>
                React for simplifying the user interface and speed-up the way
                HTML, CSS and JS work together creating responsive and
                mobile-friendly apps that display flawlessly on any device.
              </p>
            </div>
          </div>
          {/** Card 3  */}
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Version Control</div>
              <p>
                Git for keeping track of changes made to the code, enabling
                workflow management in large and collaborative projects where
                the app can be reinstated to previous versions free of issues.
              </p>
            </div>
          </div>
          {/** Card 4  */}
          <div className="card">
            <div className="box">
              <i className="fas fa-database"></i>
              <div className="text">Fullstack</div>
              <p>
                MERNG stack entirely using JS and JSON, for implementing the
                traditional 4-tier architectural pattern: frontend React,
                application Express and Node, database MongoDB and query GraphQL
                tiers.
              </p>
            </div>
          </div>

          {/** Card 5  */}
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Data Analysis</div>
              <p>
                Python, Numpy, Pandas, Matplotlib and Seaborn for exploring and
                analyzing large datasets, finding hidden patterns, unseen
                trends, discovering correlations and deriving valuable insights
                to make business predictions.
              </p>
            </div>
          </div>

          {/** Card 6  */}
          <div className="card">
            <div className="box">
              <i className="fas fa-server"></i>
              <div className="text">Big Applications</div>
              <p>
                Redux for keeping organized and managing big applications data
                flow with a single global object, maintaining consistency
                throughout the application and making both debugging and testing
                easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
