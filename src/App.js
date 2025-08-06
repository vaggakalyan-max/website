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
              src="data:image/png;base64,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"
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
              <a
                className="portfolioSection"
                href="#portfolioSection"
                id="navItem4"
              >
                <i className="fa-solid fa-sliders"></i> Portfolio
              </a>
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
            <p className="home-para">I&apos;m Sai Teja</p>
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
            <h1 className="description-title">I&apos;m Sai Teja</h1>
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
              Full Stack Developer with 3.5 years of experience in building
              scalable, high-performance web applications using the MERN stack
              Skilled in designing and deploying REST APIs, microservices, and
              implementing CI/CD pipelines on cloud platforms like AWS.
              Experienced in both frontend and backend development, with a
              strong foundation in SQL-based RDBMS and modern UI frameworks.
              Proficient in agile methodologies, version control Git, Bitbucket,
              and collaboration tools like JIRA. Currently expanding into AI/ML
              integration to bring intelligent features into real-world
              solutions.
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
                Name: Sai Teja <br /> <br /> Location: Hyderabad <br /> <br />
                Email: saitejamacha123@gmail.com <br /> <br /> Mobile No:
                9032833121
              </p>
              <h1 className="Resume-description-title">Skills</h1>

              <ul className="Resume-skills-list">
                <li>React.Js</li>
                <li>Node.Js</li>
                <li>Express.Js</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>MongoDb</li>
                <li>SQLite</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Flexbox</li>
                <li>Bootstrap</li>
                <li>GitHub</li>
                <li>AWS EC2 and CI/CD</li>
                <li>AI/ML Integration</li>
              </ul>

              <a
                className="Resume-Download-anc"
                // href="https://publuu.com/flip-book/98864/270374/page/1"
                // href="https://drive.google.com/file/d/1DyRMvtgzNC-P6pNkmWOVkalVzmRCwpw2/view"
                href="https://drive.google.com/file/d/19o6fDKeP4r5N2PgmyKXeWSW1SX7aoXov/view?usp=sharing"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
            <img
              alt="Candidate-Img2"
              className="Resume-my-image"
              src="https://i.ibb.co/DPbncQb8/c4ed4061-9f8a-43be-8edf-daa0a48787f3-1.jpg"
            />
          </div>
        </section>

        {/* portfolio  */}
        <section
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
        </section>

        {/* contact */}
        <section
          className="contact-section"
          id="contactSection"
          data-aos="fade-up"
          data-aos-delay="100"
          // data-aos-once="true"
        >
          {/* <h1 className="Resume-head">Resume</h1> */}

          <div className="contact-cards-container">
            {/* mark for tomorrow */}
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
                  {/* <form id="form"> */}
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
                        // onChange={onChangeMobileNum}
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
                        // onChange={onChangeMessage}
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
                    {/* <input type="submit" value="Send" /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
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
                  href="https://www.linkedin.com/in/saiteja123/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://github.com/Saitejamacha"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <VscGithub className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://twitter.com/account/access"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://www.facebook.com/macha.saiteja.9"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://www.instagram.com/saitejamacha/"
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
