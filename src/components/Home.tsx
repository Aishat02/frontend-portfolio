import github from "../assets/github-logo.svg";
import contact from "../assets/user-icon.svg";

const Home = () => {
  return (
    <div className="container my-5 pt-5">
      <h1 className="text-center">Hello, I'm Titilayo Tijani</h1>
      <p className="text-center">
        A frontend developer with a passion for building scalable and efficient
        responsive web applications
      </p>
      
      <div className="container d-flex justify-content-between">
        <a href="https://github.com/Aishat02?tab=repositories" target="_blank" className="btn border d-flex align-items-center gap-2">
          <img src={github} width={20} />
          View Github
        </a>
        <a href="mailto:titilayotijani15@gmail.com"className="btn border d-flex align-items-center gap-2">
          <img src={contact} width={14}/>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Home;
