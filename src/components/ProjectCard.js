import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ title, description, url, img }) => {
  return (
    <div className="project-card">
      <div className="project-card-image-container">
        <img src={`${img}`} className="project-card-image" alt={`${title}`} />
      </div>
      <div className="project-card-info">
        <div className="project-card-name">{title}</div>
        <div className="project-card-discription">{description}</div>
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">
          <div className="see-more">
            <span>See More </span>
            <FaArrowRight className="arrow-right" />{" "}
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
