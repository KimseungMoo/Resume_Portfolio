import React from "react";
import "./Project.css";
import team from "../images/team.jpg";
import game from "../images/game.jpg";

const Project = ({ click }) => {
  return (
    <div id={click ? "project__container-dark" : "project__container"}>
      <div className="project__title">PROJECTS</div>
      <div className="project__body">
        <a
          className={click ? "project__remember-dark" : "project__remember"}
          href="https://github.com/codestates/Remember-client"
          target="_blank"
        >
          <img src={team}></img>
          <div className="project__year">2021</div>
          <div className="project__name">REMEMBER</div>
        </a>
        <a
          className={click ? "project__forhobby-dark" : "project__forhobby"}
          href="https://github.com/codestates/4-for-hobby-client"
          target="_blank"
        >
          <img src={game}></img>
          <div className="project__year">2021</div>
          <div className="project__name">4 FOR HOBBY</div>
        </a>
      </div>
    </div>
  );
};

export default Project;
