import React from "react";
import "./Experience.css";

const Experience = ({ click }) => {
  return (
    <div id={click ? "experience__container-dark" : "experience__container"}>
      <div className="experience__title">EXPERIENCE</div>
      <div className="experience__timeline"></div>
      <div className="experience__codestates">
        <div className="experience__codestates-content">
          <div></div>
        </div>
        <div className="experience__codestates-arrow"></div>
        <span className="experience__codestates-icon">
          <i className="devicon-javascript-plain"></i>
        </span>
      </div>
    </div>
  );
};

export default Experience;
