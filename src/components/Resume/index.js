import "./index.css";

const Resume = () => {
  const t = "d";

  return (
    <div className="Resume-con" data-aos="fade-left">
      <h1 className="Resume-head">Resume</h1>
      <div className="Resume-inner-con">
        <div className="Resume-text-con">
          <h1 className="Resume-description-title">Profile</h1>
          <p className="Resume-my-description">
            Name: Sai Teja <br /> <br /> Location: Hyderabad <br /> <br />
            Email: saitejamacha123@gmail.com <br /> <br /> Mobile No: 9032833121
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
    </div>
  );
};

export default Resume;
