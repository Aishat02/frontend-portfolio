import brandLogo from "../assets/brand-logo.jpg";
import Bar from "./Bar";

const Navbar = () => {
  return (
    <>
      <div className="position-fixed top-0 w-100 bg-white">     
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={brandLogo} width={100} alt="Aris logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

              <div
                className="offcanvas offcanvas-end canvas-width w-50"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body justify-content-sm-start justify-content-md-end">
                  <Bar />
                </div>
              </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
