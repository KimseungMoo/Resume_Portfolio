import React from "react";
import "./Experience.css";

const Experience = ({ click }) => {
  return (
    <div id={click ? "experience__container-dark" : "experience__container"}>
      <div className="experience__title">EXPERIENCE</div>
      <div
        className={click ? "experience__timeline-dark" : "experience__timeline"}
      ></div>

      <div className="experience__codestates">
        <div
          className={
            click
              ? "experience__codestates-content-dark"
              : "experience__codestates-content"
          }
          data-aos="fade-right"
          data-aos-easing="ease-out-back"
          data-aos-duration="700"
          data-aos-delay="0"
        >
          <span
            className={
              click
                ? "experience__codestates-date-dark"
                : "experience__codestates-date"
            }
          >
            2021.03 - 2021.07
          </span>
          <div
            className={
              click
                ? "experience__codestates-arrow-dark"
                : "experience__codestates-arrow"
            }
          ></div>
          <div
            className={
              click
                ? "experience__content-title-dark"
                : "experience__content-title"
            }
          >
            코드스테이츠 (Code States)
          </div>
          <div
            className={
              click ? "experience__content-sub-dark" : "experience__content-sub"
            }
          >
            Advanced software engineering, Immersive program (28기 수료)
          </div>
          <div className="experience__content-body">
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Full-stack
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              JavaScript
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              React
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              NodeJS
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              AWS
            </span>
          </div>
          <div className="experience__content-body">
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Algorithm
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Data Structure
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Git work flow
            </span>
          </div>
          <div className="experience__content-body">
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Pair Programming
            </span>
            <span
              className={
                click
                  ? "experience__content-tag-dark"
                  : "experience__content-tag"
              }
            >
              Team Project
            </span>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-back"
          data-aos-duration="700"
          data-aos-delay="0"
        >
          <div
            className={
              click
                ? "experience__codestates-icon-dark"
                : "experience__codestates-icon"
            }
          >
            <i className="devicon-javascript-plain"></i>
          </div>
        </div>
      </div>

      <div className="experience__hourglass">
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-back"
          data-aos-duration="700"
        >
          <div
            className={
              click
                ? "experience__hourglass-icon-dark"
                : "experience__hourglass-icon"
            }
          >
            <i className="fas fa-hourglass-start mx-auto"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
