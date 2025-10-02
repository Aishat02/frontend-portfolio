import gradeTracker from "@/assets/gradetracker.png";
import github from "@/assets/github-logo.svg";
import webNetwork from "@/assets/web-logo.svg";

const GradeTracker = () => {
  return (
    <div className="col-sm-5 mb-4 mb-sm-0">
      <div className="card shadow">
        <img src={gradeTracker} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">GradeTracker</h5>
          <p className="card-text">
            A web application for tracking final course grades.
          </p>
          <div className="container text-center fs-6 mb-3">
            <div className="row gap-2">
              <div className="col rounded bg-lavender">HTML</div>
              <div className="col rounded bg-lavender">CSS</div>
              <div className="col rounded bg-lavender">Bootstrap</div>
              <div className="col rounded bg-lavender">Sass</div>
              <div className="col rounded bg-lavender">JavaScript</div>
              <div className="col rounded bg-lavender">ReactJs</div>
              <div className="col rounded bg-lavender">TypeScript</div>
              <div className="col rounded bg-lavender">Firebase</div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <a
              href="https://aris-gradetracker.netlify.app/"
              target="blank"
              className="btn btn-dark d-flex align-items-center"
            >
              <img src={webNetwork} alt="" width={16} />
              <span className="ps-2">Website</span>
            </a>
            <a
              href="https://github.com/Aishat02/gradetracker"
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

export default GradeTracker;
