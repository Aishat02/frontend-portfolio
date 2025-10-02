import GradeTracker from "./projects/GradeTracker";
import WeatherApp from "./projects/WeatherApp";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="row justify-content-between my-3">
        <GradeTracker />
        <WeatherApp />
      </div>
    </div>
  );
};

export default Projects;
