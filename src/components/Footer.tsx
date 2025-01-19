import mail from "../assets/envelope-logo.svg";
import github from "../assets/github-logo.svg";
import frontendMentor from "../assets/favicon-32x32.png";

const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-3 bg-dark text-light m-0">
        <p className="mb-0">© 2025 Aris</p>
        <div className="d-flex gap-3 ms-2">
          <img src={frontendMentor} alt="FrontendMentor favicon" width={18} />
          <img src={github} alt="Github icon" width={18} />
          <img src={mail} alt="email icon" width={18} />
        </div>
      </div>
    </>
  );
};

export default Footer;
