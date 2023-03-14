import "./index.css";

const AboutMe = () => {
  const c = "d";

  return (
    <div className="wrapper">
      <div className="about-con" id="slide">
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
              brief yet compelling narrative that sells you as a candidate. They
              typically want you to discuss your career path, list a few major
              highlights and end with how your professional past has prepared
              you for the job in question.
            </p>
          </div>
          <img
            className="my-image"
            src="https://res.cloudinary.com/dwwzfhucu/image/upload/v1678806085/IMG_20220801_001248_cmxz2g.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
