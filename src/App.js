import React from "react";
import myImage from "./images/myImage.jpg";
import CodeWallpaper from "./images/CodeWallpaper.jpg";
import headWallpaper from "./images/GreenWallpaper.jpg";
import SkillSet from "./SkillCard/skills";
import ProjectSet from "./ProjectCard/projects";
import CertificateSet from "./CertificateCard/cartificates";
import ExpSet from "./ExpCard/Experience";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
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
              <div className="div1text">
                Developer | Competitive Programming | Innovator
              </div>
            </div>
          </center>
        </div>
        <div>
          <div className="div2Title">
            <Zoom>Skill Set</Zoom>
          </div>
          <div
            Container
            style={{
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <SkillSet />
          </div>
        </div>
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
          <div className="div2Title">
            <Zoom>Major Projects</Zoom>
          </div>
          <div
            style={{
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <ProjectSet />
          </div>
        </div>
        <div className="div2Title">
          <Zoom>Certificares</Zoom>
        </div>
        <div
          style={{
            alignItems: "center",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <CertificateSet />
        </div>
        <div>
          <div className="div2Title">
            <Zoom>Competitive Programming</Zoom>
          </div>
          <div
            style={{
              paddingLeft: "40px",
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
                  alt="Nikets's Codechef"
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/codechef.svg"
                />
                <a href="https://www.codechef.com/users/niket999">Code Chef</a>
                Currently a 4 star coder and now focussing on short challenges.
              </Rotate>
              <br />
              <Rotate top left>
                <img
                  align="left"
                  alt="Nikets's Codeforces"
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/codeforces.svg"
                />
                <a href="https://codeforces.com/profile/NIKET-777">
                  Code Forces
                </a>
                1,400+ Points gained, and planing for more.
              </Rotate>
              <br />
              <Rotate top left>
                <img
                  align="left"
                  alt="Nikets's LeeTCode"
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/leetcode.svg"
                />
                <a href="https://leetcode.com/NIKET_100/">LeeCode</a>
                150+ questions solved and working for more.
              </Rotate>
              <br />
              <Rotate top left>
                <img
                  align="left"
                  alt="Nikets's GeeksForGeeks"
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/geeksforgeeks.svg"
                />
                <a href="https://leetcode.com/NIKET_100/">GeeksForFeeks</a>
                400+ problems solved of various dificulty.
              </Rotate>
              <br />
              {/* <Rotate top left>
                <img
                  align="left"
                  alt="Nikets's Hacker Earth"
                  style={{ height: "20px", width: "20px", marginRight: "8px" }}
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/hackerearth.svg"
                />
                <a href="https://www.hackerearth.com/@niket88">Hacker Earth</a>
                Solving problems for extra practice.
              </Rotate> */}
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
        </div>
        <div>
          <div className="div2Title">
            <Zoom>Education</Zoom>
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div style={{ paddingLeft: "40px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Iiit-una-logo.png/220px-Iiit-una-logo.png"
                alt="IIITU logo"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <b>Institute: </b> Indian Institute of Information Technology Una
              <br />
              <b>Branch: </b> Computer Science and Engineering (Honors)
              <br />
              <b>Year: </b> 2019-23
              <br />
              <b>Status: </b> Third Year
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className="div2Title">
            <Zoom>Contact Details</Zoom>
          </div>
          <div style={{ padding: "20px" }}>
            {/* <b>Email: </b>niketagrawal777@gmail.com
            <br /> */}
            <b>LinkedIn: </b> linkedin.com/in/niket-agrawal-baa183191
            <br />
            <b>Git Hub: </b> https://github.com/Niket-iiitu
            <br />
          </div>
        </div>
        <div>
          <div className="div2Title">
            <Zoom>Other Details</Zoom>
          </div>
          <div style={{ padding: "20px" }}>
            <b>OS Used: </b> Windows, Kubantu(Linux)
            <br />
            <b>Languages: </b> English, Hindi
            <br />
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
