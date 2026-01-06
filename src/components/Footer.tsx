import mail from "../assets/envelope-logo.svg";
import github from "../assets/github-logo.svg";
import frontendMentor from "../assets/favicon-32x32.png";

const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-3 bg-dark text-light m-0">
        <p className="mb-0">© 2025 Aris</p>
        <div className="d-flex gap-3 ms-2">
          <a
            href="https://www.frontendmentor.io/profile/Aishat02"
            target="blank"
            className="btn d-flex align-items-center p-0"
            aria-label="View Frontend Mentor Profile"
          >
            <img
              src={frontendMentor}
              alt="Frontend-Mentor favicon"
              width={18}
            />
          </a>

          <a
            href="https://github.com/Aishat02"
            target="blank"
            className="btn d-flex align-items-center p-0"
            aria-label="View GitHub Profile"
          >
            <img src={github} alt="GitHub logo" width={18} />
          </a>

          <a
            href="mailto:titilayotijani15@gmail.com"
            target="blank"
            className="btn d-flex align-items-center p-0"
            aria-label="email address"
          >
            <img src={mail} alt="email icon" width={18} />
          </a>
        </div>
      </div>
    </>
  );
};  

export default Footer;
