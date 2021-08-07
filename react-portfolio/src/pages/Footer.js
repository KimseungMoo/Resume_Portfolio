import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer__container">
      <div className="footer__icon">
        <a href="https://github.com/KimseungMoo" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://tobe-engineer.tistory.com/" target="_blank">
          {/* <i className="fab fa-blogger"></i> */}
          <i class="fas fa-blog"></i>
        </a>
      </div>
      <div className="footer__text">Copyright © Seungmoo Kim</div>
    </div>
  );
};

export default Footer;
