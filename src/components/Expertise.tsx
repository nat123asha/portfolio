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
              Natasha assists parents and caregivers to resolve disputes relating to care and contact arrangements. Providing clear, structured legal advice to help clients progress matters when disagreements arise about what arrangements should be in place for their child or children. With prompt communication and a strong focus on the best interests and welfare of the child, Natasha works closely with clients at every stage of the process. Her services include skilled negotiation, as well as filing or responding to court applications and representing clients at hearings. 
            </p>
          </div>

          <div className="skill">
            <h3>Guardianship disputes</h3>
            <p>
              When guardians of a child cannot agree on guardianship decisions, Natasha assists clients through negotiation and, where necessary, court proceedings. Recognising that guardians remain connected through their children long after the court process ends, Natasha provides clear, practical legal advice focused on achieving workable solutions while taking wider family dynamics into account.
            </p>
          </div>

          <div className="skill">
            <h3>Family Violence</h3>
            <p>
              Whether you are applying for or responding to a protection order under the Family Violence Act, Natasha provides clear, professional advice tailored to your situation. She understands the sensitive nature of these matters and offers non judgmental, safe, and confidential legal support to help you navigate the process with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;


