import React from "react";
import "./education.css";
import ExperienceCard from "../Cards/ExperienceCard";
import { education } from "../../data/Static";

function Education() {
  return (
    <>
      <div id="education" className="education-container">
        <div className="education-wrapper">
          <div className="education-title">Education</div>
          <div className="education-subtitle">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </div>
          <div>
            <ul className="timeline">
              {education.map((edu) => {
                return (
                  <li key={edu.id}>
                    <ExperienceCard details={edu} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
