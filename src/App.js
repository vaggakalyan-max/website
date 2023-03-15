import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <div className="main">
      {/* <Header /> */}
      <div className="Header-Con">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="Nav-container">
            <a className="navbar-brand" href="#">
              <p>M S T</p>
            </a>

            <div className="nav-items-con" id="navbarNavAltMarkup">
              <div className="nav-each-item">
                <a className="homeSection" id="navItem1" href="#homeSection">
                  <i className="fas fa-home-alt">Home</i>
                </a>
                <a className="aboutSection" href="#aboutSection" id="navItem2">
                  <i className="fa-solid fa-user"> About</i>
                </a>
                <a
                  className="resumeSection"
                  href="#resumeSection"
                  id="navItem3"
                >
                  <i className="fa-solid fa-file">Resume</i>
                </a>
                <a
                  className="portfolioSection"
                  href="#portfolioSection"
                  id="navItem4"
                >
                  <i className="fa-solid fa-sliders">Portfolio</i>
                </a>
                <a
                  className="contactSection"
                  href="#contactSection"
                  id="navItem5"
                >
                  <i className="fa-solid fa-envelope">Contact</i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="App">
        {/* <Home /> */}

        <section className="home-con" id="homeSection">
          <div className="home-card">
            <h1 className="home-head">Hello!</h1>
            <p className="home-para">I'm Sai Teja</p>
            <a className="anchor-btn" href="#aboutSection">
              About me
            </a>
            <a className="anchor-btn">Contact</a>
          </div>
        </section>

        {/* <AboutMe /> */}

        <section className="about-con" data-aos="fade-right" id="aboutSection">
          <h1 className="about-head">About Me</h1>
          <div className="about-inner-con">
            <div className="about-text-con">
              <h1 className="description-title">
                I'm Sai Teja Full Stack Web Developer
              </h1>
              <p className="my-description">
                Although this question seems relatively simple, it can be
                challenging for candidates to answer effectively. While the
                question is open-ended, employers generally want you to create a
                brief yet compelling narrative that sells you as a candidate.
                They typically want you to discuss your career path, list a few
                major highlights and end with how your professional past has
                prepared you for the question.
              </p>
            </div>
            <img
              className="my-image"
              alt="candidate"
              src="https://res.cloudinary.com/dwwzfhucu/image/upload/v1678806085/IMG_20220801_001248_cmxz2g.jpg"
            />
          </div>
        </section>

        {/* <Resume />  */}
        <section className="Resume-con" data-aos="fade-left" id="resumeSection">
          <h1 className="Resume-head">Resume</h1>
          <div className="Resume-inner-con">
            <div className="Resume-text-con">
              <h1 className="Resume-description-title">Profile</h1>
              <p className="Resume-my-description">
                Name: Sai Teja <br /> <br /> Location: Hyderabad <br /> <br />
                Email: saitejamacha123@gmail.com <br /> <br /> Mobile No:
                9032833121
              </p>
              <h1 className="Resume-description-title">Skills</h1>

              <p className="Resume-skills-list">
                Python <br /> <br /> JavaScript <br /> <br />
                React.Js <br /> <br /> Express.Js <br /> <br />
                Node.Js <br /> <br /> MongoDb <br /> <br />
                SQLite <br /> <br /> HTML <br /> <br /> CSS
                <br /> <br /> Flexbox <br /> <br />
                Bootstrap <br /> <br /> GitHub
              </p>

              <a
                className="Resume-Download-anc"
                // href="https://publuu.com/flip-book/98864/270374/page/1"
                href="https://drive.google.com/file/d/1DyRMvtgzNC-P6pNkmWOVkalVzmRCwpw2/view"
              >
                Download Resume
              </a>
            </div>
            <img
              alt="Candidate-Img2"
              className="Resume-my-image"
              src="https://res.cloudinary.com/dwwzfhucu/image/upload/v1678806085/IMG_20220801_001248_cmxz2g.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
