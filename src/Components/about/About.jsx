import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I`m a skilled full-stack developer specializing in MERN, with
              numerous AWS and web development certifications showcasing
              expertise and dedication.
            </p>
            <p>
              As a full-stack developer, I excels in building dynamic web
              applications using the MERN stack, leveraging AWS for scalable
              solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>AWS Console</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
       
      </div>
      <div className="about-achievments">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>7</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>27</h1>
            <p>GITHUB COMMITS</p>
          </div>
        </div>
    </div>
  );
};

export default About;
