import "./App.css";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#0a3759",
      }}
    >
      <Home />
      <Navbar />
      <div className="inner-container">
        <Skills />
        <Experience />
      </div>
      <Projects />
      <div className="inner-container">
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
