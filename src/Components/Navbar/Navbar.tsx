import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./navbar.css";

function Navbar() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav className="navbar">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={`nav-link ${activeNav === "#home" ? "active" : ""}`}
      >
        <HomeIcon className="icon-style" />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`nav-link ${activeNav === "#skills" ? "active" : ""}`}
      >
        <EngineeringIcon className="icon-style" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`nav-link ${activeNav === "#experience" ? "active" : ""}`}
      >
        <WorkHistoryIcon className="icon-style" />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={`nav-link ${activeNav === "#projects" ? "active" : ""}`}
      >
        <AssignmentTurnedInIcon className="icon-style" />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={`nav-link ${activeNav === "#education" ? "active" : ""}`}
      >
        <SchoolIcon className="icon-style" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`nav-link ${activeNav === "#contact" ? "active" : ""}`}
      >
        <MessageIcon className="icon-style" />
      </a>
    </nav>
  );
}

export default Navbar;
