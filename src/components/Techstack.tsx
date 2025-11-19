import girlCoder from "../assets/girl-coder.png";
import html from "../assets/html5-logo.svg";
import css from "../assets/css3-logo.svg";
import javaScript from "../assets/javascript-logo.svg";
import git from "../assets/git-logo.svg";
import bootstrap from "../assets/bootstrap-logo.svg";
import reactJs from "../assets/react-logo.svg";
import typeScript from "../assets/typescript-logo.svg";
import sass from "../assets/sass-logo.svg";
import nodejs from "../assets/nodejsDark.svg";
import express from "../assets/express.svg";

const Techstack = () => {
  return (
    <div className="border mb-3">
      <div className="border-bottom pt-1 d-flex align-items-center gap-2">
        <img
          src={girlCoder}
          alt="Female programmer working on a problem"
          width={55}
        />
        <h2>My Tech Stack</h2>
      </div>
      <div className="py-2 d-flex justify-content-between flex-wrap">
        <img src={html} alt="HTML5 icon" width={40} />
        <img src={css} alt="CSS3 icon" width={40} />
        <img src={javaScript} alt="JavaScript icon" width={40} />
        <img src={git} alt="Git icon" width={40} />
        <img src={bootstrap} alt="Bootstrap icon" width={40} />
        <img src={reactJs} alt="ReactJs icon" width={40} />
        <img src={typeScript} alt="TypeScript icon" width={40} />
        <img src={sass} alt="sass icon" width={40} />
        <img src={nodejs} alt="nodejs icon" width={40}/>
        <img src={express} alt="express icon" width={40}/>
      </div>
    </div>
  );
};

export default Techstack;
