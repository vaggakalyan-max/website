import "./index.css";

const Header = () => (
  <div className="Header-Con">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="Nav-container">
        <div className="nav-items-con" id="navbarNavAltMarkup">
          <div className="nav-each-item">
            <a className="homeSection" id="navItem1" href="#homeSection">
              <i className="fas fa-home-alt">Home</i>
            </a>
            <a className="aboutSection" href="#aboutSection" id="navItem2">
              <i className="fa-solid fa-user"> About</i>
            </a>
            <a className="resumeSection" href="#resumeSection" id="navItem3">
              <i className="fa-solid fa-file">Resume</i>
            </a>
            <a
              className="portfolioSection"
              href="#portfolioSection"
              id="navItem4"
            >
              <i className="fa-solid fa-sliders">Portfolio</i>
            </a>
            <a className="contactSection" href="#contactSection" id="navItem5">
              <i className="fa-solid fa-envelope">Contact</i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
