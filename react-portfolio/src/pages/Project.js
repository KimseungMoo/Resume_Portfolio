import React from "react";
import "./Project.css";
import team from "../images/team.jpg";
import game from "../images/game.jpg";

const Project = () => {
  return (
    <div id="project__container">
      <div className="project__title">PROJECTS</div>
      <div className="project__body">
        <a
          className="project__remember"
          href="https://www.projectremember.shop/"
          target="_blank"
        >
          <img src={team}></img>
          <div className="project__year">2021</div>
          <div className="project__name">REMEMBER</div>
        </a>
        <a
          className="project__forhobby"
          href="http://4-for-hobby.s3-website.ap-northeast-2.amazonaws.com/"
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
