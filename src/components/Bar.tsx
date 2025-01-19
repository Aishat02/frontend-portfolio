const Bar = () => {
  return (
    <>
      <div className="navbar-nav gap-4 ">
        <a className="nav-link" aria-current="page" href="#" data-bs-toggle="tab">
          Home
        </a>
        <a className="nav-link" href="#about" data-bs-toggle="tab">
          About
        </a>
        <a className="nav-link" href="#projects" data-bs-toggle="tab">
          Projects
        </a>
        <a className="nav-link" href="#contact" data-bs-toggle="tab">
          Contact
        </a>
      </div>
    </>
  );
};

export default Bar;
