import React from "react";
import myImage from "./images/myImage.jpg";
import SkillSet from "./SkillCard/skills";
import ProjectSet from "./ProjectCard/projects";
import CertificateSet from "./CertificateCard/cartificates";
import ExpSet from "./ExpCard/Experience";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import "./App.css";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <div className="mainStyle">
      <div className="headDiv">
        <img src={myImage} alt="Niket Agrawal" className="image" />
        <div className="div1text">Niket Agrawal</div>
        <div className="div1text">Full Stack Web Developer</div>
      </div>
      <div>
        <div>
          <div className="div2Title">
            <Zoom>Experience</Zoom>
          </div>
          <div
            style={{
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
              maxWidth: "100vw",
            }}
          >
            <ExpSet />
          </div>
          <div className="div2Title">
            <Zoom>Skill Set</Zoom>
          </div>
          <div Container className="SkillSection">
            <SkillSet />
          </div>
        </div>
        {/* <div> */}
        <div className="div2Title">
          <Zoom>Education</Zoom>
        </div>
        <div className="EductationBody">
          <LightSpeed left cascade>
            <div className="EducationTest">
              <p>
                <b>Institute: </b>Indian Institute of Information Technology Una
              </p>
              <p>
                <b>Branch: </b>Computer Science and Engineering
              </p>
              <p>
                <b>Staring Year: </b>2019
                <b style={{ paddingLeft: "60px" }}>Completion Year: </b>2023
              </p>
              <p>
                <b>Status: </b>Graduated
                <b style={{ paddingLeft: "70px" }}>Location: </b>Una, H.P.
              </p>
            </div>
          </LightSpeed>
          <LightSpeed right cascade>
            <div>
              <img
                src="https://img.collegepravesh.com/2015/11/IIIT-Una-Logo.png"
                alt="IIITU logo"
                className="EducationLogo"
              />
            </div>
          </LightSpeed>
        </div>
        {/* </div> */}
      </div>
      <div className="div2Title">
        <Zoom>Certificares</Zoom>
      </div>
      <div className="CardSection">
        <CertificateSet />
      </div>
      <div className="div2Title">
        <Zoom>Major Projects</Zoom>
      </div>
      <div className="CardSection">
        <ProjectSet />
      </div>
      <div>
        <div className="div2Title">
          <Zoom>Contact Details</Zoom>
        </div>
        <Fade up cascade>
          <div className="ContactContent">
            <div className="ContactLeft">
              <img
                align="left"
                alt="Nikets's LinkedIn"
                className="IconStyle"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/linkedin.svg"
              />
              <b>LinkedIn: </b>{" "}
              <a href="https://www.linkedin.com/in/niket-agrawal-developer/">
                Click Here
              </a>
              <br />
              <div style={{ paddingTop: "20px" }} />
              <img
                align="left"
                alt="Nikets's GitHub"
                className="IconStyle"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/github.svg"
              />
              <b>Git Hub: </b>{" "}
              <a href="https://github.com/Niket-iiitu">Click Here</a>
              <br />
              <div style={{ paddingTop: "20px" }} />
              <img
                align="left"
                alt="Nikets's Resume"
                className="IconStyle"
                src="https://cdn.simpleicons.org/googledocs/000000"
              />
              <b>Resume: </b>{" "}
              <a href="https://drive.google.com/file/d/12RHwq7m2Ju3BQ0s1eSOsj_hjp0tpAlqW/view">
                Click Here
              </a>
              <br />
            </div>
            <div className="ContactRight">
              <b>Email: </b>
              <a href="mailto:niketagrawal777@gmail.com">
                niketagrawal777@gmail.com
              </a>
              <br />
              <b>Mobile: </b> +91 9575931379
              <br />
              <b>Languages: </b> English, Hindi
              <br />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default App;
