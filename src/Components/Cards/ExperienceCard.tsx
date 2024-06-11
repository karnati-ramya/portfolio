import React from "react";
import "./experienceCard.css";
import { IDetails } from "../../data/Static";

interface Props {
  details: IDetails;
}

function ExperienceCard({ details }: Props) {
  return (
    <div className="experience-card">
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <img className="company-image" alt="vConstruct" src={details.img} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            color: "#e3e5e7",
          }}
        >
          <div className="role">{details.schoolorRole}</div>
          <div className="company">{details.degreeorCompany}</div>
          <div className="date">{details.date}</div>
        </div>
      </div>

      {details.description && (
        <ul
          style={{
            paddingLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {details.description.map((item, index) => (
            <li key={index} className="experience-description">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceCard;
