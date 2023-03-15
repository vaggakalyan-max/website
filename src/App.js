import { useState } from "react";
import { MdLocationPin, MdWifiCalling3 } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ProjectItem from "./components/ProjectItem";
import TabItem from "./components/TabItem";
import "./App.css";

const tabsList = [
  { tabId: "STATIC", displayText: "Static" },
  { tabId: "RESPONSIVE", displayText: "Responsive" },
  { tabId: "DYNAMIC", displayText: "Dynamic" },
];

const projectsList = [
  {
    projectId: 0,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    description:
      "The music page enables the users to browse through the images of all-time favorite music albums.",
  },
  {
    projectId: 1,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    projectId: 2,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that gives you a basic understanding of Advanced Technologies.",
  },
  {
    projectId: 3,
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",
    title: "Happy Meals",
    description: "Discover the best foods in over 1,000 restaurants.",
  },
  {
    projectId: 4,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },
  {
    projectId: 5,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    projectId: 6,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },
  {
    projectId: 7,
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",
    title: "Design",
    description:
      "A website to showcase the best features and give more information about the Design tool.",
  },
  {
    projectId: 8,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    projectId: 9,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    projectId: 10,
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
];

const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);

  const clickTabItem = (tabId) => {
    setActiveTabId(tabId);
  };

  const getFilteredProjects = () => {
    const allFilteredProjects = projectsList.filter(
      (eachprojectDetails) => eachprojectDetails.category === activeTabId
    );
    return allFilteredProjects;
  };

  const filteredProjects = getFilteredProjects();

  console.log(filteredProjects);
  // console.log(activeTabId);

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
            <a className="anchor-btn" href="#contactSection">
              Contact
            </a>
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
        <section
          className="Resume-con"
          id="resumeSection"
          data-aos="fade-up"
          data-aos-delay="100"
        >
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

        <section
          className="portfolio-sec"
          id="portfolioSection"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="Portfolio-head">Portfolio</h1>
          <div className="portfolio-projects">
            <ul className="tabs-container">
              {tabsList.map((tabDetails) => (
                <TabItem
                  key={tabDetails.tabId}
                  tabDetails={tabDetails}
                  clickTabItem={clickTabItem}
                  isActive={activeTabId === tabDetails.tabId}
                />
              ))}
            </ul>

            <ul className="project-list-container">
              {filteredProjects.map((projectDetails) => (
                <ProjectItem
                  key={projectDetails.projectId}
                  projectDetails={projectDetails}
                />
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contactSection">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="section-title mb-5 pb-2" data-aos="fade-up">
              <h2 className="section-heading mt-3">CONTACT ME</h2>
              <p className="description-contact">
                Send your Queries through Mail
              </p>
            </div>
            <div className="row contact-mail-con">
              <div
                className="location-con"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="infor d-flex flex-column  align-items-stretch">
                  <div className="address">
                    <i>
                      <MdLocationPin />
                    </i>
                    <h4>Location:</h4>
                    <p>Hyderabad, Telangana, India, Pin code-500098</p>
                  </div>

                  <div className="email">
                    <i>
                      <HiMail />
                    </i>
                    <h4>Email:</h4>
                    <p>saitejamacha123@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i>
                      <MdWifiCalling3 />
                    </i>
                    <h4>Call:</h4>
                    <p>+91 9032833121</p>
                  </div>
                  {/* <iframe
                    title={""}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.533395693468!2d84.22316832620785!3d18.601819597786072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c536c6e44099f%3A0xb501168849671a61!2sTekkali%2C%20Andhra%20Pradesh%20532201!5e0!3m2!1sen!2sin!4v1667020558534!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style="border:0; width: 100%; height: 314px;"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                </div>
              </div>
              <div className="mail-con" data-aos="fade-up" data-aos-delay="100">
                <div className="box d-flex flex-column  align-items-stretch">
                  <h2 className="mb-5">SEND MESSAGE</h2>
                  <form id="form">
                    <span id="span"></span>
                    <div className="inputBox">
                      <input
                        type="text"
                        name="name"
                        id="fullname"
                        placeholder="Enter your Full Name"
                      />
                      <label htmlFor="fullname">Full Name</label>
                      <small>Error message</small>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your valid email address"
                      />
                      <label htmlFor="email">Email</label>
                      <small>Error message</small>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Enter your phone Number"
                      />
                      <label htmlFor="phonenumber">Phone Number</label>
                      <small>Error message</small>
                    </div>
                    <div className="inputBox">
                      <textarea
                        type="textarea"
                        placeholder="Type your message here"
                        name="message"
                        id="message"
                        rows="4"
                        cols="70"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <small>Error message</small>
                    </div>

                    <button type="submit" id="sub">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
