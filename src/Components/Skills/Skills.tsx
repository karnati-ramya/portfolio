import { langues } from "../../data/Static";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        <div className="skills-subtitle">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </div>

        <div className="skills-grid ">
          {langues.map(({ id, src, title, style }) => (
            <div
              key={id}
              style={{
                boxShadow: style,
                transform: "scale(1)",
                transition: "transform 0.5s",
                padding: "0.5rem",
                borderRadius: "0.5rem",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={src}
                alt=""
                style={{
                  margin: "0 auto",
                  width: "4rem",
                  height: "4rem",
                }}
              />
              <p style={{ marginTop: "0.25rem" }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
