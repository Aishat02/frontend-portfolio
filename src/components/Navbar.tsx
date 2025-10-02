import logo from "../assets/brand-logo.jpg";
import { Link } from "react-scroll";
import { useState } from "react";

type Section = {
  to: string;
  name: string;
};

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  const pageSection: Section[] = [
    { to: "home", name: "Home" },
    { to: "about", name: "About" },
    { to: "projects", name: "Projects" },
    { to: "contact", name: "Contact" },
  ];

  return (
    <nav className="navbar fixed-top bg-white navbar-expand-md border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home" smooth={true} duration={300}>
          <img src={logo} alt="brand-logo" width={90} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          data-bs-scroll="true"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-pills justify-content-end flex-grow-1 pe-3">
              {pageSection.map((section) => (
                <li className="nav-item" key={section.to}>
                  <Link
                    className={`nav-link ${
                      active === section.to ? "active" : ""
                    }`}
                    to={section.to}
                    offset={-70}
                    smooth={true}
                    duration={300}
                    spy={true}
                    onSetActive={() => setActive(section.to)}
                    aria-current="page"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
