import React from "react";
import "./projectCard.css";
import { IProjects } from "../../data/Static";

interface Props {
  project: IProjects;
}

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card-container">
      <img alt={project.alt} className="project-image" src={project.img} />
      <div className="project-title">{project.projectName}</div>
      <div className="project-description">{project.description}</div>
      <div className="techs-container">
        {project.technology.map((tech, index) => {
          return (
            <div className="technology" key={index}>
              <p className="technolody-text">{tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
