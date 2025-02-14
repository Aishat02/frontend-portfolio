import { useState } from "react";
import weatherApp from "../assets/weather-app-preview.png";
import github from "../assets/github-logo.svg";
import webNetwork from "../assets/web-logo.svg";
import multiStepForm from "../assets/mobile-design.jpg";
import {Toast, ToastContainer} from 'react-bootstrap';

const Projects = () => {
    const [show, setShow] = useState(false);
 
    const handleClick = () => {
      setShow(true);
    }
  return (
    <div className="container-fluid my-5" id="projects">
      <h2 className="py-2">Projects</h2>
      <div className="row mx-auto justify-content-between card-width">
        <div className="col-sm-12 col-md-5 card p-0 shadow position-static ">
          <img src={weatherApp} className="card-img-top " alt="..." />
          <div className="card-body p-3">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              A fully functional weather app that displays the real-time weather
              and forecast for the next 5 days for any city, including the
              temperature, humidity, and wind speed.
            </p>

            <div className="row px-2 text-center justify-content-between gy-3 mb-3 techstack">
              <div className="col-3 py-2 px-0 w-60 rounded-2">HTML</div>
              <div className="col-2 py-2 px-0 w-60 rounded-2">CSS</div>
              <div className="col-3 py-2 px-0 w-90px rounded-2">Bootstrap</div>
              <div className="col-3 py-2 px-0 w-90px rounded-2">
                JavaScript
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <a href="https://aishat02.github.io/SheCodes-Weather-App/" target="blank" className="btn btn-dark d-flex align-items-center">
                <img src={webNetwork} alt="" width={16} />
                <span className="ps-2">Website</span>
              </a>
              <a href="https://github.com/Aishat02/SheCodes-Weather-App" target="blank" className="btn border d-flex align-items-center">
                <img src={github} alt="" width={18} />
                <span className="ps-2">Source</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-5 mt-md-0 mt-sm-5 card p-0 shadow card-width position-static">
          <img
            src={multiStepForm}
            className="card-img-top card-img-width "
            alt="..."
          />
          <div className="card-body p-3 multi-step-form">
            <h5 className="card-title">Multi-Step Form</h5>
            <p className="card-text">
              {" "}
              A Multi-Step Form that validates user inputs and provides real-time
              feedback before submission.
            </p>

            <div className="row px-2 text-center justify-content-between gy-3 mb-3 techstack">
              <div className="col-3 py-2 px-0 w-60 rounded-2">HTML</div>
              <div className="col-3 py-2 px-0 w-60 rounded-2">CSS</div>
              <div className="col-3 py-2 px-0 w-90px rounded-2">Bootstrap</div>
              <div className="col-3 py-2 px-0 w-90px rounded-2">
                JavaScript
              </div>
              <div className="col-5 py-2 px-0 w-90px rounded-2">ReactJs</div>
              <div className="col-4 py-2 px-0 w-90px rounded-2">
                TypeScript
              </div>
              <div className="col-3 py-2 px-0 w-90px rounded-2">Sass</div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-dark d-flex align-items-center" onClick={handleClick}>
                <img src={webNetwork} alt="" width={16} />
                <span className="ps-2">Website</span>
              </button>
              <a href="#multi-step-form" className="btn border d-flex align-items-center" onClick={handleClick}>
                <img src={github} alt="" width={18} />
                <span className="ps-2">Source</span>
              </a>
            </div>
          </div>
        </div>
</div>       
<div className="mt-5 d-flex justify-content-sm-center justify-content-md-start">
<button className="btn btn-dark" onClick={handleClick}>More</button>
</div>
      <ToastContainer
        position="bottom-end"
        className="position-fixed"
        style={{ zIndex: 1 }}
      >
        {" "}
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">In Progress</strong>
          </Toast.Header>
          <Toast.Body>
            This content is not available at this time. <br /> Please check
            back later!
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </div>
  );
};

export default Projects;
