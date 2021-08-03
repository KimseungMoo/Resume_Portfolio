import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div id="skill__container">
      <div className="skill__title">SKILLS</div>
      <div className="skill__body">
        <div className="skill__imgbox">
          <i className="devicon-html5-plain"></i>
          <div className="skill__img-name">HTML 5</div>
        </div>
        <div className="skill__imgbox">
          <i class="devicon-css3-plain"></i>
          <div className="skill__img-name">CSS 3</div>
        </div>
        <div className="skill__imgbox">
          <i class="devicon-react-original"></i>
          <div className="skill__img-name">React</div>
        </div>
        <div className="skill__imgbox">
          <i className="devicon-javascript-plain"></i>
          <div className="skill__img-name">JavaScript</div>
        </div>
        <div className="skill__imgbox">
          <i className="devicon-typescript-plain"></i>
          <div className="skill__img-name">TypeScript</div>
        </div>
        <div className="skill__imgbox">
          <i class="devicon-git-plain"></i>
          <div className="skill__img-name">Git</div>
        </div>
        <div className="skill__imgbox">
          <i class="devicon-amazonwebservices-original"></i>
          <div className="skill__img-name">AWS</div>
        </div>
        <div className="skill__imgbox-node">
          <i class="devicon-nodejs-plain-wordmark node"></i>
          <div className="skill__img-name-node">NodeJS</div>
        </div>
        <div className="skill__imgbox">
          <i class="devicon-mysql-plain"></i>
          <div className="skill__img-name">MySQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
