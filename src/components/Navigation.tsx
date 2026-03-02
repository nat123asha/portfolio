import React, { ElementType, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/images/logo_nav_bar.png";
import Obfuscate from "react-obfuscate";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";
import LogoMobile from "../assets/images/logo_mobile.png";

function HideOnScroll({ children }: any) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const address: ElementType = () => <>{process.env.REACT_APP_ADDRESS}</>;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          component="nav"
          id="navigation"
          sx={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
          className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        >
          <Toolbar className="navigation-bar">
            <Box
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, mt: 4, mb: 4 }}
            >
              <img src={Logo} alt="Logo" style={{ height: "80px" }} />
            </Box>

            <Box
              sx={{ display: { xs: "flex", md: "none" }, mr: 1, mt: 1, mb: 1 }}
            >
              <img src={LogoMobile} alt="Logo" style={{ height: "100px" }} />
            </Box>

            {mode === "dark" ? (
              <LightModeIcon onClick={() => modeChange()} />
            ) : (
              <div></div> //</AppBar><DarkModeIcon onClick={() => modeChange()} />
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "auto",
                color: "#43a59d",
                fontSize: "0.9rem",
                paddingTop: { xs: "10px", md: "0px" },
                paddingBottom: { xs: "10px", md: "0px" },
              }}
            >
              <span>
                <b>NATASHA FAIRLEY</b>
              </span>
              <span style={{ marginBottom: "10px" }}>BARRISTER</span>
              <span>
                <b>Mobile/WhatsApp:</b>{" "}
                <Obfuscate tel={process.env.REACT_APP_PHONE_NUMBER} />
              </span>
              <span>
                <b>Email:</b>{" "}
                <Obfuscate email={process.env.REACT_APP_EMAIL_ADDRESS} />
              </span>
              <span>
                <Obfuscate element={address} />
              </span>
              {/* {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{ color: "#fff" }}
              >
                {item[0]}
              </Button>
            ))} */}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

export default Navigation;
