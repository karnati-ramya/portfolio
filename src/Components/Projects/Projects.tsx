import { projects } from "../../data/Static";
import ProjectCard from "../Cards/ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-title">Projects</div>
        <div className="projects-subtitle">
          Following are the projects i have worked over the course of 3 years.
        </div>
        <div className="projects-inner-container">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
