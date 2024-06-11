import React from "react";
import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/Static";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-wrapper">
        <h1 className="logo">Ramya Karnati</h1>
        <nav className="navigation">
          <a href="#home" className="navigation-link">
            Home
          </a>
          <a href="#skills" className="navigation-link">
            Skills
          </a>
          <a href="#experience" className="navigation-link">
            Experience
          </a>
          <a href="#projects" className="navigation-link">
            Projects
          </a>
          <a href="#education" className="navigation-link">
            Education
          </a>
          <a href="#contact" className="navigation-link">
            Contact
          </a>
        </nav>
        <div className="social-media-icons">
          <a href={Bio.linkedin} target="display" className="social-media-icon">
            <LinkedInIcon />
          </a>
        </div>
        <p className="copyright">
          &copy; Copyright 2024 Ramya Karnati. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
