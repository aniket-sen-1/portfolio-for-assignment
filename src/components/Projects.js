import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects_data } from "../project_data";

const Projects = () => {
  console.log(projects_data);
  return (
    <React.Fragment>
      <div className="projects-outer" id="project-id">
        <div className="projects-inner">
          <div className="project-heading">Featured Projects</div>
          <div className="projects-card-grid">
            {projects_data.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                img={project.img}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
