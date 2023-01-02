import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects-outer" id="project-id">
        <div className="projects-inner">
          <div className="project-heading">Featured Projects</div>
          <div className="projects-card-grid">
            <div className="project-card">
              <div className="project-card-image-container">
                <img
                  src="/images/meme-generator.jpg"
                  className="project-card-image"
                />
              </div>
              <div className="project-card-info">
                <div className="project-card-name">Meme Generator</div>
                <div className="project-card-discription">
                  Meme Generator app created By aniket-sen-1 to make memes on
                  random images.
                </div>
                <a
                  href="https://meme-generator-by-aniket-sen-1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="see-more">
                    <span>See More </span>
                    <FaArrowRight className="arrow-right" />{" "}
                  </div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-image-container">
                <img
                  src="/images/contact-app.jpg"
                  className="project-card-image"
                />
              </div>
              <div className="project-card-info">
                <div className="project-card-name">Contact Manager</div>
                <div className="project-card-discription">
                  Contact Manger app build in React App to save Contact
                  Information quickly with basic CRUD Functionality with serach
                  feature.
                </div>
                <a
                  href="https://contact-manager-app-by-aniket-sen-1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="see-more">
                    <span>See More </span>
                    <FaArrowRight className="arrow-right" />{" "}
                  </div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-image-container">
                <img
                  src="/images/airbnb-image.jpg"
                  className="project-card-image"
                />
              </div>
              <div className="project-card-info">
                <div className="project-card-name">React Sapce</div>
                <div className="project-card-discription">
                  Air bnb clone webiste build in React Js with Awesome Css
                  Styling.
                </div>
                <a
                  href="https://air-bnb-clone-by-aniket-sen-1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="see-more">
                    <span>See More </span>
                    <FaArrowRight className="arrow-right" />{" "}
                  </div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-image-container">
                <img
                  src="/images/digital-card.jpg"
                  className="project-card-image"
                />
              </div>
              <div className="project-card-info">
                <div className="project-card-name">Digital Business Card</div>
                <div className="project-card-discription">
                  Digital Business Card Build in Reac Js with Awesome Css
                  Styling.
                </div>
                <a
                  href="https://digital-business-card-by-aniket-sen-1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="see-more">
                    <span>See More </span>
                    <FaArrowRight className="arrow-right" />{" "}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
