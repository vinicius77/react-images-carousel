import React, { useEffect } from 'react';
import './About.css';
import LinkTo from './LinkTo';
import { aboutMe } from '../data';
import { sendEvent } from '../googleAnalytics/analytics';

const About = () => {
  const { description, title, introduction } = aboutMe;

  useEffect(() => {
    sendEvent({ category: 'About Me', action: 'Visiting page' });
  }, []);
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/vbonifacio.png" alt="Profile Pic" />
          </div>
          <div className="column right">
            <div className="text">
              {introduction}
              <span>{title}</span>
            </div>
            <p>{description}</p>

            <LinkTo
              to={'/files/viniciusCerqueiraBonifacioCV.pdf'}
              children={'Download My CV'}
              option={'download'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
