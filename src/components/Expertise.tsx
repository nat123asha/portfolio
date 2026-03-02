import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>Care and contact disputes</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Flask. I have a strong
              proficiency in the SDLC process and frontend + backend
              development.
            </p>
          </div>

          <div className="skill">
            <h3>Guardianship dispute</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
          </div>

          <div className="skill">
            <h3>Family Violence</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

