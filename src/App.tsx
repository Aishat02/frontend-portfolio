import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
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
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
