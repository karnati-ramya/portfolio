import React from "react";
import "./experience.css";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/Static";

function Experience() {
  return (
    <div id="experience" className="experience-container">
      <div className="experience-wrapper">
        <div className="experience-title">Experience</div>
        <div className="experience-subtitle">
          A glimpse into my experience across diverse projects
        </div>
        {experiences.map((exp) => {
          return <ExperienceCard key={exp.id} details={exp} />;
        })}
      </div>
    </div>
  );
}

export default Experience;
