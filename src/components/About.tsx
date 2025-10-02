import TechStack from "../components/Techstack";

const About = () => {
  return (
    <div className="mx-4 mb-5" id="about">
      <h2>About Me</h2>
      <div>
        <p>
          Hello! I'm Titilayo Tijani, a passionate and driven frontend
          developer. I specialize in creating responsive, user-friendly, and
          interactive websites using the latest technologies.
        </p>
        <p>
          I'm currently seeking for new frontend development opportunities and
          am open to remote work.
        </p>
        <TechStack />
      </div>
    </div>
  );
};

export default About;
