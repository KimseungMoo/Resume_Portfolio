import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <LandingPage click={click} setClick={setClick} />
      <About click={click} />
      <Project click={click} />
      <Skill />
      <Experience click={click} />
    </>
  );
}

export default App;
