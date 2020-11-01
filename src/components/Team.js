import React from "react";
//import Emoji from "./Emoji";
import "./Team.css";
import Carousel from "./Carousel";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="max-width">
        <h2 className="title">
          My <span>Team</span>
        </h2>
        <Carousel />
        {/* <div className="carousel">
          <div className="card">
            <div className="box">
              <img src="images/afarina.jpeg" alt="afarina" />
              <div className="text">
                Farina, André <Emoji symbol="🇧🇷" label="brazil-flag" />
              </div>
              <p>
                Software Architect focused on Cloud Native applications,
                distributed systems with a special interest in Go/C, Kubernetes
                and Docker. Also experienced using Java and Ruby.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="images/jzeppellini.jpeg" alt="jzeppellini" />
              <div className="text">
                Zeppellini, Jéssica <Emoji symbol="🇺🇾" label="uruguay-flag" />{" "}
              </div>
              <p>
                Graphic Designer and Digital Marketer specialized in
                illustration, branding, visual identities, concepts
                publications, event and marketing promotions designs. Loves
                working with passionate entrepreneurs to assist with their
                design needs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="images/cdiaz.jpeg" alt="cdiaz" />
              <div className="text">
                Díaz, Clemente <Emoji symbol="🇨🇱" label="chile-flag" />
              </div>
              <p>
                Filmmaker, editor and creator of branded content, experienced
                working on film production for advertising in Europe and South
                America. Also creates beautiful, elegant, communicative and
                visually stunning shots with his camera.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src="images/hitkonen.jpeg" alt="hitkonen" />
              <div className="text">
                Itkonen, Hanna <Emoji symbol="🇫🇮" label="finnish-flag" />{" "}
              </div>
              <p>
                International Business Developer and very creative
                multi-language professional with extensive background in
                international and domestic sales, managing and implementing
                strategic solutions. Always treats sales and business
                development with an entrepreneurial spirit.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Team;
