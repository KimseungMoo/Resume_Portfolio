import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <LandingPage click={click} setClick={setClick} />
      <About click={click} />
      <Project click={click} />
      <Skill />
    </>
  );
}

export default App;
