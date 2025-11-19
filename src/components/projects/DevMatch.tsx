import devMatch from "@/assets/devmatch-console2.png";
import github from "@/assets/github-logo.svg";
import webNetwork from "@/assets/web-logo.svg";

const DevMatch = () => {
  return (
    <div className="col-sm-6 col-md-4 mb-4 mb-sm-0 justify-content-center">
      <div className="card shadow">
        <img src={devMatch} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">DevMatch AI</h5>
          <p className="card-text">
            AI-Powered assistant tool that analyzes GitHub profiles using AI to
            extract skills, suggest career paths, and provide job fit scores
            based on actual code contributions and repository analysis.{" "}
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
              <div className="col rounded bg-lavender">Node.Js</div>
              <div className="col-4 rounded bg-lavender">Express</div>
              <div className="col rounded bg-lavender">Pollination AI</div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <a
              href="https://devmatch-ai.vercel.app/"
              target="blank"
              className="btn btn-dark d-flex align-items-center"
            >
              <img src={webNetwork} alt="" width={16} />
              <span className="ps-2">Website</span>
            </a>
            <a
              href="https://github.com/Aishat02/devmatch-ai"
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

export default DevMatch;
