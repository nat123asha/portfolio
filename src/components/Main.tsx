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
            sx={{ width: 200, height: 200, bgcolor: "white" }}
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
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1
            style={{
              background: "rgb(205 0 161 / 30%)",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            Natasha Fairley
          </h1>
          <p
            style={{
              background: "rgb(135 192 225 / 90%)",
              paddingLeft: "30px",
              paddingRight: "30px",
              marginTop: "20px",
            }}
          >
            Family Lawyer
          </p>

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

