import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsStackOverflow, BsMedium } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header-parent">
      <div className="social-bar">
        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="social-icon-parent">
            <HiMail className="social-icon" />
          </div>
        </a>

        <a href="https://github.com/aniket-sen-1">
          <div className="social-icon-parent">
            <AiFillGithub className="social-icon" />
          </div>
        </a>

        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="social-icon-parent">
            <FaLinkedin className="social-icon" />
          </div>
        </a>

        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="social-icon-parent">
            <BsMedium className="social-icon" />
          </div>
        </a>

        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="social-icon-parent">
            <BsStackOverflow className="social-icon" />
          </div>
        </a>
      </div>
      <div className="menu-parent">
        <div className="menu-item">
          <a href={`${window.location.origin}/#project-id`}>Projects</a>
        </div>
        <div className="menu-item">
          {" "}
          <a href={`${window.location.origin}/#contact-id`}>Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
