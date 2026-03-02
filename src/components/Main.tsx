import React from "react";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/legal picture.jpg";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src={avatar}
            alt="Avatar"
            style={{ objectFit: "cover" }}
            sx={{ width: 300, height: 300, bgcolor: "white" }}
          />
        </Box>
        <div className="content">
          <Box sx={{ lineHeight: { xs: 1, md: 1.5 } }}>
            <h1>Natasha Fairley</h1>
          </Box>

          <Box sx={{ mt: { xs: 0, md: -4 } }}>
            <h3>Barrister</h3>
          </Box>
          <p style={{ marginTop: "40px", fontSize: "1rem" }}>
            Natasha has over 10 years of court experience in the Family Court.
            Natasha has also represented clients in the High Court and appeared
            at the Court of Appeal. Specialising in parenting and guardianship
            disputes under the Care of Children Act 2004; Oranga Tamariki Act
            1989 proceedings; and Family Violence Act 2018 proceedings,
            including applications for and responding to protection order
            applications. Natasha also deals with matters relating to mental
            health under the Mental Health (Compulsory Assessment and Treatment)
            Act 1992 and appointments of welfare guardians and property managers
            under the Protection of Personal and Property Rights Act 1988. A
            legal aid provider for over seven years, Natasha can assist clients
            on a private basis or who require legal aid for legal
            representation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
