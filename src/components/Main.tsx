import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/legal picture.jpg";
import Avatar from "@mui/material/Avatar";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <Avatar
            src={avatar}
            alt="Avatar"
            style={{ objectFit: "cover" }}
            sx={{ width: 300, height: 300, bgcolor: "white" }}
          />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a> */}
            {/* <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a> */}
          </div>
          <h1>Natasha Fairley</h1>
          <h3 style={{marginTop: "-20px"}}>Barrister</h3>
          <p style={{marginTop:"40px", fontSize:"1rem"}}>Natasha has over 10 years of court experience in the Family Court. Natasha has also represented clients in the High Court and appeared at the Court of Appeal.
Specialising in parenting and guardianship disputes under the Care of Children Act 2004; Oranga Tamariki Act 1989 proceedings; and Family Violence Act 2018 proceedings, including applications for and responding to protection order applications.
Natasha also deals with matters relating to mental health under the Mental Health (Compulsory Assessment and Treatment) Act 1992 and appointments of welfare guardians and property managers under the Protection of Personal and Property Rights Act 1988.
A legal aid provider for over seven years, Natasha can assist clients on a private basis or who require legal aid for legal representation.</p>

          <div className="mobile_social_icons">
            {/* <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a> */}
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;




