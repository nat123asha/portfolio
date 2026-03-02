import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import Background from "./assets/images/background.png";
import { Box } from "@mui/material";

function App() {
  const [mode, setMode] = useState<string>("light");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        {/* <Timeline />
        <Project /> */}
        {/* <Contact /> */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 0,
          }}
        >
          <img src={Background} alt="background" style={{ height: "1000px" }} />
        </Box>
      </FadeIn>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
