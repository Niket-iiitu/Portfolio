import React from "react";
import myImage from "./images/myImage.jpg";
import CodeWallpaper from "./images/CodeWallpaper.jpg";
import headWallpaper from "./images/TeckWallpaper.jpeg";
import SkillSet from "./SkillCard/skills";
import ProjectSet from "./ProjectCard/projects";
import CertificateSet from "./CertificateCard/cartificates";
import ExpSet from "./ExpCard/Experience";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import "./style.css";

const App = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "black" }}>
          <center>
            <div
              style={{
                backgroundImage: `url(${headWallpaper})`,
                paddingTop: "5vh",
                paddingBottom: "5vh",
                paddingLeft: "5vh",
                margin: "0px",
                textStyle: "bold",
              }}
              className="headDiv"
            >
              <img src={myImage} alt="Niket Agrawal" className="image" />
              <div className="div1text">Niket Agrawal</div>
              <div className="div1text">Full Stack Web Developer</div>
            </div>
          </center>
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
              }}
            >
              <ExpSet />
            </div>
            {/* <div>
              <div className="div2Title">
                <Zoom>Competitive Programming</Zoom>
              </div>
              <div
                style={{
                  paddingLeft: "70px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  display: "flex",
                }}
              >
                <div style={{ width: "75%" }}>
                  <div style={{ paddingTop: "20px" }} />
                  <Rotate top left>
                    <img
                      align="left"
                      alt="Nikets's GeeksForGeeks"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "8px",
                      }}
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/geeksforgeeks.svg"
                    />
                    <a href="https://auth.geeksforgeeks.org/user/niketagrawal100/practice">
                      Geeks for Geeks
                    </a>
                    700+ problems solved of various dificulty.
                  </Rotate>
                  <br />
                  <Rotate top left>
                    <img
                      align="left"
                      alt="Nikets's LeeTCode"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "8px",
                      }}
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/leetcode.svg"
                    />
                    <a href="https://leetcode.com/NIKET_100/">LeeCode</a>
                    300+ questions solved and working for more.
                  </Rotate>
                  <br />
                  <Rotate top left>
                    <img
                      align="left"
                      alt="Nikets's Codechef"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "8px",
                      }}
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/codechef.svg"
                    />
                    <a href="https://www.codechef.com/users/niket999">
                      Code Chef
                    </a>
                    Currently a 4 star coder and working on more.
                  </Rotate>
                  <br />
                  <Rotate top left>
                    <img
                      align="left"
                      alt="Nikets's Codeforces"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "8px",
                      }}
                      src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/codeforces.svg"
                    />
                    <a href="https://codeforces.com/profile/NIKET-777">
                      Code Forces
                    </a>
                    1,400+ Points gained, and planing for more.
                  </Rotate>
                  <br />
                </div>
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={CodeWallpaper}
                    style={{ height: "250px", width: "250px" }}
                    alt="Competitive Programming"
                  />
                </div>
              </div>
            </div> */}
            <div className="div2Title">
              <Zoom>Skill Set</Zoom>
            </div>
            <div Container className="SkillSection">
              <SkillSet />
            </div>
          </div>
          <div>
            <div className="div2Title">
              <Zoom>Education</Zoom>
            </div>
            <div className="EductationBody">
              <div className="EducationTest">
                <LightSpeed left cascade>
                  <p>
                    <b>Institute: </b>Indian Institute of Information Technology
                    Una
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
                </LightSpeed>
              </div>
              <div>
                <img
                  src="https://img.collegepravesh.com/2015/11/IIIT-Una-Logo.png"
                  alt="IIITU logo"
                  className="EducationLogo"
                />
              </div>
            </div>
          </div>
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
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                paddingLeft: "15%",
                fontSize: "15px",
                width: "50%",
              }}
            >
              <img
                align="left"
                alt="Nikets's Codeforces"
                style={{ height: "25px", width: "25px", marginRight: "8px" }}
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
                alt="Nikets's Codeforces"
                style={{ height: "25px", width: "25px", marginRight: "8px" }}
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/github.svg"
              />
              <b>Git Hub: </b>{" "}
              <a href="https://github.com/Niket-iiitu">Click Here</a>
              <br />
            </div>

            <div
              style={{
                padding: "20px",
                paddingLeft: "20%",
                width: "50%",
                paddingTop: "20px",
              }}
            >
              <b>Email: </b>{" "}
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
        </div>
        <div>
          <div
            style={{
              padding: "20px",
              width: "100%",
              paddingTop: "20px",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <a href="https://drive.google.com/file/d/12RHwq7m2Ju3BQ0s1eSOsj_hjp0tpAlqW/view">
              <p>
                <h4>Click here to open RESUME</h4>
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
