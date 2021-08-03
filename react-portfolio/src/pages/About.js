import React from "react";
import "./About.css";
import profile from "../images/profile.jpeg";

const About = ({ click }) => {
  return (
    <div id={click ? "about__container-dark" : "about__container"}>
      <div className="about__title">ABOUT ME</div>
      <div className="about__body">
        <div className={click ? "about__photo-dark" : "about__photo"}>
          <img className="about__photo-profile" src={profile}></img>
          <i className="devicon-react-original colored about__photo-react"></i>
          <i className="devicon-javascript-plain colored about__photo-js"></i>
          <i className="devicon-typescript-plain colored about__photo-ts"></i>
        </div>
        <div className="about__content">
          <div className="about__content-head">
            <span className="circle__red"></span>
            <span className="circle__yellow"></span>
            <span className="circle__green"></span>
          </div>
          <div className="about__content-body">안녕하세요 :)</div>
          <div className="about__content-tail">
            <div>
              👋 색다른 경험을 만들고 싶은 프론트엔드 개발자 김승무 입니다.
            </div>
            <div>
              제가 구현한 서비스를 통해 사용자에게 색다른 경험을 주고 싶습니다.
              그런 경험은 코딩능력과 유저 인터페이스, 편의성 등이 모두 갖춰졌을
              때 만들어진다고 생각합니다. ⭐개발 기술은 물론 UI / UX 또한 생각할
              수 있는 프론트엔드 개발자가 목표입니다.
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
