import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import myImage from "./images/myImage.jpg";
import headWallpaper from "./images/HeadWallpaperShrink.jpg";
import SkillSet from "./SkillCard/skills";
import ProjectSet from "./ProjectCard/projects";
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
          <div className="div2Title">Skill Set</div>
          <div Container>
            <SkillSet />
          </div>
        </div>
        <div>
          <div className="div2Title">Major Projects</div>
          <div style={{ alignItems: "center" }}>
            <ProjectSet />
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
