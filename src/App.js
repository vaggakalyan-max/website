/* eslint-disable prettier/prettier */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// npm i emailjs/browser
import { MdLocationPin, MdWifiCalling3 } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { TfiArrowUp } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectItem from "./components/ProjectItem";
import TabItem from "./components/TabItem";
import "./App.css";

// Sai Teja's Code

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
  const form = useRef();
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [fullname, setFullName] = useState("");
  const [mail, setMail] = useState("");
  // const [nameError, setNameError] = useState("");

  // let isformValid;

  function clickTabItem(tabId) {
    setActiveTabId(tabId);
  }

  const getFilteredProjects = () => {
    const allFilteredProjects = projectsList.filter(
      (eachprojectDetails) => eachprojectDetails.category === activeTabId
    );
    return allFilteredProjects;
  };

  const filteredProjects = getFilteredProjects();

  // console.log(filteredProjects);

  const onChangeName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();

    if (fullname === "" && mail === "") {
      console.log("bot");
      // eslint-disable-next-line no-alert
      alert("Name, Mail and Message Required");
    } else {
      console.log("user");
      emailjs
        .sendForm(
          "service_24pgz37",
          "template_aepixx4",
          form.current,
          "jIFjw41DJxfn4ByJL"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <div className="main">
      {/* <Header /> */}
      <Header />
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark nav-con">
        <div className="container">
          <a className="navbar-brand" href="#homeSection">
            <img
              alt="site-logo"
              className="logo-image"
              src="https://img.myloview.com/posters/kv-logo-initial-letter-logo-design-template-vector-illustration-700-180722166.jpg"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-center">
              <GiHamburgerMenu />
            </span>
          </button>
          <div
            className="collapse navbar-collapse all-nav-items-con"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ml-auto nav-each-item">
              <a className="homeSection" id="navItem1" href="#homeSection">
                <i className="nav-tab-name"></i> Home
                {/* <span className="sr-only">(current)</span> */}
              </a>
              <a className="aboutSection" href="#aboutSection" id="navItem2">
                <i className="fa-solid fa-user"></i> About
              </a>
              <a className="resumeSection" href="#resumeSection" id="navItem3">
                <i className="fa-solid fa-file"></i> Resume
              </a>
              {/* <a
                className="portfolioSection"
                href="#portfolioSection"
                id="navItem4"
              >
                <i className="fa-solid fa-sliders"></i> Portfolio
              </a> */}
              <a
                className="contactSection"
                href="#contactSection"
                id="navItem5"
              >
                <i className="fa-solid fa-envelope"></i> Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="App">
        {/* <Home /> */}
        <Home />
        <section className="home-con" id="homeSection">
          <div className="home-card">
            <h1 className="home-head">Hello!</h1>
            <p className="home-para">I&apos;m Kalyan Vagga</p>
            <a className="anchor-btn" href="#aboutSection">
              About me
            </a>
            <a className="anchor-btn" href="#contactSection">
              Contact
            </a>
          </div>
        </section>

        {/* <AboutMe /> */}
        <AboutMe />
        <section
          className="about-con"
          data-aos="fade-up"
          data-aos-delay="100"
          id="aboutSection"
        >
          <h1 className="about-head">About Me</h1>

          <div className="about-text-con">
            <h1 className="description-title">I&apos;m Kalyan Vagga</h1>
            {/* <p className="my-description">
              I&apos;m curious about IT. My interest in web development, which
              includes building websites and applications, has recently grown. I
              wish to develop my expertise in this area. I&apos;m trying to find
              a business that will hire me to work with their devs. In exchange,
              I would give you my complete dedication and contribute to your
              team in a positive and amiable way. I&apos;m searching for job as
              a Full-Stack Developer or MERN stack engineer right now.
            </p> */}
            <p className="my-description">
              Able to develop infrastructure in AWS using Terraform. Certified
              in RHCSA, AWS Cloud Practitioner, and Red Hat OpenShift-DO280 with
              hands-on knowledge of OpenShift troubleshooting, container
              orchestration, and cluster administration. Experienced in handling
              ticket-based support, system reboots, log analysis, and
              automation. Seeking an opportunity to contribute as an OpenShift
              Administrator in a dynamic enterprise environment.
            </p>
          </div>
        </section>

        {/* <Resume />  */}
        <Resume />
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
                Name: Kalyan Vagga <br /> <br /> Location: Hyderabad <br />{" "}
                <br />
                Email: kalyan.vagga@gmail.com <br /> <br /> Mobile No:
                9052911863
              </p>
              <h1 className="Resume-description-title">Skills</h1>

              <ul className="Resume-skills-list">
                <li>Hashicrop Terraform</li>
                <li>Openshift Certified</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>RHCSA</li>
                <li>AWS Certified</li>
                <li>Jenkins</li>
                <li>Linux Administration</li>
                <li>CI/CD Pipelines</li>
              </ul>

              <a
                className="Resume-Download-anc"
                // href="https://publuu.com/flip-book/98864/270374/page/1"
                // href="https://drive.google.com/file/d/1DyRMvtgzNC-P6pNkmWOVkalVzmRCwpw2/view"
                href="https://drive.google.com/file/d/1nVE5fyAwspV4QX2AHSc9HTqqpL0bmWvF/view?usp=sharing"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
            <img
              alt="Candidate-Img2"
              className="Resume-my-image"
              src="https://i.ibb.co/gLgpYrC5/Whats-App-Image-2025-10-28-at-13-07-02.jpg"
            />
          </div>
        </section>

        {/* portfolio  */}
        {/* <section
          className="portfolio-sec"
          id="portfolioSection"
          data-aos="fade-up"
          data-aos-delay="100"
          // data-aos-once="true"
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
        </section> */}

        {/* contact */}
        <section
          className="contact-section"
          id="contactSection"
          data-aos="fade-up"
          data-aos-delay="100"
          // data-aos-once="true"
        >
          {/* <h1 className="Resume-head">Resume</h1> */}

          {/* <div className="contact-cards-container">
           
            <div className="section-title mb-5 pb-2">
              <h2 className="section-heading mt-3">CONTACT ME</h2>
              <p className="description-contact">
                Send your Queries through Mail
              </p>
            </div>
            <div className="row contact-mail-con">
              <div className="location-con">
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
                </div>
              </div>
              <div className="mail-con">
                <div className="box d-flex flex-column align-items-stretch">
                  <h2 className="mb-5">SEND MESSAGE</h2>
                  
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="inputBox">
                      <input
                        onChange={onChangeName}
                        type="text"
                        name="user_name"
                        id="fullname"
                        placeholder="Enter your Full Name"
                      />
                      <label htmlFor="fullname">Name</label>
                      <small>Error message</small>
                    </div>

                    <div className="inputBox">
                      <input
                        onChange={onChangeMail}
                        type="text"
                        name="user_email"
                        id="email"
                        placeholder="Enter your valid email address"
                      />
                      <label htmlFor="mail">Email</label>
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

                    <button type="submit" id="sub" value="Send">
                      Send
                    </button>
                  
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* navigation to home */}
        <div className="nav-to-home-con">
          <div className="nav-to-home">
            <a href="#homeSection">
              <TfiArrowUp className="nav-to-home-arrow" />
            </a>
          </div>
        </div>

        {/* footer */}
        <Footer />
        <section className="footer-section">
          <div className="text-and-all-icons-con">
            <p className="social-heading">Get in Touch</p>

            <div className="all-icons-con">
              <div className="icon-con">
                <a
                  href="https://www.linkedin.com/in/kalyan-vagga-a24559351"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://github.com/vaggakalyan-max/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <VscGithub className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://twitter.com/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://www.facebook.com/profile.php?id=100004216516370"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://www.instagram.com/kalyan.vagga/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram
                    className="social-icon"
                    // style={{ width: "100px" }}
                  />
                </a>
              </div>
            </div>

            <p className="social-heading">All Rights Reserved</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
