import React from "react";
import RamyaPhoto from "../../assets/ramyaa.jpg";
import Typewriter from "typewriter-effect";
import "./home.css";
import { Bio } from "../../data/Static";

function Home() {
  return (
    <div id="home">
      <div
        className="home-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#062f4e",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
        }}
      >
        <div className="profile-container">
          <div className="profile-contents-container">
            <div className="profile-content-title">
              Hi, I am <br /> Ramya Karnati
            </div>
            <div className="profile-roles-text">
              I am a
              <span style={{ color: "#3f9cb9" }}>
                <Typewriter
                  options={{
                    strings: ["React Developer", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="profile-tag-line">
              Front-end developer with 3 years of experience in building
              user-friendly and responsive web applications. Delivered 7+
              projects highlighting expertise in ReactJS, JavaScript,
              TypeScript, and creating scalable and responsive web applications
              with Hasura GraphQL for back-end development.
            </div>
            <a
              href={Bio.resume}
              target="display"
              style={{
                width: "95%",
                maxWidth: "300px",
              }}
            >
              <button className="resume-button">CHECK RESUME</button>
            </a>
          </div>
          <div className="profile-image-container">
            <div className="profile-image">
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={RamyaPhoto}
                alt="ramya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
