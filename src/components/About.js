import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/About.css';
const About = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <h3 className="footer-title">Contact</h3>
        <p className="footer-description">
          Copyright @2022 | Designed by <strong>Anthony Griffith</strong>
        </p>
        <ul className="socials">
          <li>
            <a
              href="https://www.linkedin.com/in/anthony-griffith/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size="1.5em" color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AnthonyGriffith"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size="1.5em" color="white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default About;
