import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechStack from "./components/Techstack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container-fluid px-4">
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
