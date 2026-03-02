import React, { ElementType, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/images/logo_nav_bar.png";
import shadows from "@mui/material/styles/shadows";
import Obfuscate from "react-obfuscate";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";
import { jsx } from "@emotion/react";

const drawerWidth = 240;
const navItems = [
  // ["Expertise", "expertise"],
  // ["History", "history"],
  // ["Projects", "projects"],
  ["Contact", "contact"],
];

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

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  const scrollToSection = (section: string) => {
    console.log(section);
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: "smooth" });
      console.log("Scrolling to:", expertiseElement); // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found'); // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
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
              }}
            >
              <span>
                <b>NATASHA FAIRLEY</b>
              </span>
              <span style={{ marginBottom: "10px" }}>BARRISTER</span>
              <span>
                <b>Mobile/WhatsApp:</b> <Obfuscate tel={process.env.REACT_APP_PHONE_NUMBER} />
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
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;

