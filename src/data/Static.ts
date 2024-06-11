import html from "../assets/langues/HTML.png";
import reactLangue from "../assets/langues/react.png";
import ts from "../assets/langues/typescript.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import apollo from "../assets/langues/apollo.png";
import csharp from "../assets/langues/csharp.png";
import js from "../assets/langues/js.png";
import redux from "../assets/langues/redux.png";
import graphql from "../assets/langues/graphql.png";
import git from "../assets/langues/git.png";
import mui from "../assets/langues/mui.png";
import aggrid from "../assets/langues/aggrid.png";
import bootstrap from "../assets/langues/bootstrap.png";
import nitw from "../assets/nitw.png";
import cvrh from "../assets/cvr.png";
import lpage from "../assets/lpage.png";
import gmat from "../assets/gmat.png";
import pir from "../assets/pir.png";
import cds from "../assets/cds.png";
import bpm from "../assets/bpm.png";
import portfolio from "../assets/portfolio.png";
import vconstruct from "../assets/vconstruct.png";

export const Bio = {
  github: "",
  resume:
    "https://drive.google.com/file/d/1HDcs9_N7dvrierhC23uRg9w3k7EdoNMo/view",
  linkedin: "https://www.linkedin.com/in/ramya-karnati-082284141",
};

export const education: IDetails[] = [
  {
    id: 0,
    img: nitw,
    alt: "NITW",
    schoolorRole: "National Institute of Technology, Warangal",
    date: "Sep 2020 - July 2022",
    degreeorCompany: "MTech, Civil Engineering",
  },
  {
    id: 1,
    img: cvrh,
    alt: "CVR",
    schoolorRole: "CVR College of Engineering, Hyderabad",
    date: "Sep 2014 - July 2018",
    degreeorCompany: "BTech, Civil Engineering",
  },
];

export const projects: IProjects[] = [
  {
    id: 0,
    img: pir,
    alt: "pir",
    technology: [
      "ReactJS",
      "Typescript",
      "Redux",
      "Hasura",
      "Apollo Client",
      "GraphQL",
      "C#",
      "PostgreSQL",
      "Git",
      "MUI",
      "AG Grid",
      "CKEditor 5",
      "ADO",
    ],
    projectName: "PIR Hub",
    description: `A comprehensive web application, streamlining the entire project lifecycle by integrating diverse processes and 8 
DPR Construction applications into a centralized, one-stop solution`,
  },
  {
    id: 1,
    img: gmat,
    alt: "gmat",
    technology: [
      "ReactJS",
      "Typescript",
      "Redux",
      "Hasura",
      "Apollo Client",
      "GraphQL",
      "C#",
      "PostgreSQL",
      "Git",
      "MUI",
      "AG Grid",
      "ADO",
    ],
    projectName: "Gross Margin Analyzing Tool",
    description: `A web application for project leaders to estimate projected gross margins, leveraging data, promoting best practices, 
and guiding the team through building gross margin analysis resulting in a 20% increase in accuracy.`,
  },

  {
    id: 2,
    img: bpm,
    alt: "bpm",
    technology: [
      "ReactJS",
      "Typescript",
      "C#",
      "SQL",
      "Git",
      "Redux",
      "DevExtreme DataGrid",
      "Material UI",
      "Jira",
    ],
    projectName: "Common Design System",
    description: `A web application for managing plans that describes how an organization or business operates which allows to 
formalize the management structure and operations, guaranteeing that all members agree to achieve the 
organization's objectives.`,
  },
  {
    id: 3,
    img: lpage,
    alt: "lpage",
    technology: ["ReactJS", "Typescript", "Git", "MUI", "AG Grid", "ADO"],
    projectName: "Landing Page Package",
    description: `A reusable npm package made for landing pages, ensuring seamless cross-platform functionality, accelerating the 
development by 80%.`,
  },
  {
    id: 4,
    img: cds,
    alt: "cds",
    technology: ["ReactJS", "Typescript", "Git", "ADO"],
    projectName: "Common Design System",
    description: `Developed reusable components such as headers, side navigation, breadcrumbs, buttons, and help panels and more with consistent styling for universal integration across all applications in the organization.`,
  },
  {
    id: 5,
    img: portfolio,
    alt: "portfolio",
    technology: ["ReactJS", "TypeScript"],
    projectName: "Portfolio",
    description: `Self Portfolio.`,
  },
];

export const experiences: IDetails[] = [
  {
    id: 0,
    img: vconstruct,
    alt: "vconstruct",
    schoolorRole: "Software Engineer",
    date: "Jul 2022 - Present",
    degreeorCompany: "vConstruct Private Limited",
    description: [
      `Developed user-friendly interactive web applications closely aligned with enterprise mocks, achieving full 
    responsiveness and increasing usability across devices by 50% compared to previous versions.`,
      `Built a comprehensive reusable React component library, and package, saving developers 40% of time through 
    streamlined development processes, maximized code reusability, and guaranteed consistency across projects.`,
      `Created an end-to-end data flow by implementing Hasura GraphQL and Apollo Client for backend to frontend 
    integration, coupled with React for frontend development.`,
      `Made 1 reusable package end-to-end, directly interacting with product owner. Documented usage guidelines and 
    provided support to facilitate adoption by other teams.`,
      ` Designed and built 4 construction industry solutions using React, Redux, TypeScript, Material UI, GraphQL,
    and .NET.`,
      `Conducted thorough code reviews to ensure adherence to best practices, maintain code quality, promote knowledge 
    sharing within the development team and achieving a potential reduction in errors up to 30%.`,
      ` Proficient in Git version control ensuring efficient collaboration and code management.`,
      `Well-versed with project management tools such as Azure DevOps (ADO) and Jira for seamless communication, task 
    tracking, and efficient project management throughout the development process.`,
      `Collaborated closely with cross-functional teams, facilitating effective communication to ensure seamless`,
    ],
  },
];

export const langues = [
  {
    id: 0,
    src: reactLangue,
    title: "React",
    style: "0 4px 6px #87ceeb80",
  },
  {
    id: 10,
    src: redux,
    title: "Redux",
    style: "0 4px 6px #764abc80",
  },
  {
    id: 1,
    src: js,
    title: "JavaScript",
    style: "0 4px 6px #ffff0080",
  },
  {
    id: 2,
    src: ts,
    title: "TypeScript",
    style: "0 4px 6px #2d79c780",
  },

  {
    id: 3,
    src: html,
    title: "HTML",
    style: "0 4px 6px #ffa50080",
  },
  {
    id: 4,
    src: css,
    title: "CSS",
    style: "0 4px 6px #0000ff80",
  },
  {
    id: 6,
    src: bootstrap,
    title: "Bootstrap",
    style: "0 4px 6px #ee82ee80",
  },
  {
    id: 5,
    src: graphql,
    title: "graphQL",
    style: "0 4px 6px #e535ab80",
  },
  {
    id: 7,
    src: apollo,
    title: "Apollo Client",
    style: "0 4px 6px #00000080",
  },
  {
    id: 13,
    src: csharp,
    title: "C#",
    style: "0 4px 6px #3b009380",
  },
  {
    id: 8,
    src: github,
    title: "GitHub",
    style: "0 4px 6px #a9a9a980",
  },
  {
    id: 9,
    src: mui,
    title: "MUI",
    style: "0 4px 6px #0080ff80",
  },
  {
    id: 11,
    src: aggrid,
    title: "AG Grid",
    style: "0 4px 6px #ff8b0080",
  },
  {
    id: 12,
    src: git,
    title: "Git",
    style: "0 4px 6px #f0513480",
  },
];

// interfaces
export interface IProjects {
  id: number;
  img: string;
  alt: string;
  technology: string[];
  projectName: string;
  description: string;
}
export interface IDetails {
  id: number;
  img: string;
  alt: string;
  schoolorRole: string;
  date: string;
  degreeorCompany: string;
  description?: string[];
}
