import weatherApp from "@/assets/weather-app-preview.png";
import github from "@/assets/github-logo.svg";
import webNetwork from "@/assets/web-logo.svg";

const WeatherApp = () => {
  return (
    <div className="col-sm-5">
      <div className="card shadow">
        <img src={weatherApp} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">
            A fully functional weather app that displays the real-time weather
            and forecast for the next 5 days for any city, including the
            temperature, humidity, and wind speed.
          </p>

          <div className="container text-center fs-6 mb-3">
            <div className="row gap-2">
              <div className="col rounded bg-lavender">HTML</div>
              <div className="col rounded bg-lavender">CSS</div>
              <div className="col rounded bg-lavender">Bootstrap</div>
              <div className="col rounded bg-lavender">JavaScript</div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <a
              href="https://aishat02.github.io/SheCodes-Weather-App"
              target="blank"
              className="btn btn-dark d-flex align-items-center"
            >
              <img src={webNetwork} alt="" width={16} />
              <span className="ps-2">Website</span>
            </a>
            <a
              href="https://github.com/Aishat02/SheCodes-Weather-App"
              target="blank"
              className="btn border d-flex align-items-center"
            >
              <img src={github} alt="" width={18} />
              <span className="ps-2">Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
