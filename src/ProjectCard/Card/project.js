import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import "./style.css";
import Flip from "react-reveal/Flip";

const ProjectCard = ({ title, language, description, link, url }) => {
  return (
    <Flip right>
      <div
        onClick={() => {
          window.open(url);
        }}
        title={"Click to Open"}
      >
        <div className="container">
          <div className="row">
            <div className="HomeScreenAchievementsCard">
              <div className="row">
                <div
                  item
                  xs={3}
                  sm={3}
                  className="col-sm"
                  style={{
                    width: "300px",
                    height: "auto",
                  }}
                >
                  <div
                    className="ProjectScreenContent"
                    style={{ backgroundColor: "rgb(62,108,255)" }}
                  >
                    <div>
                      <h2
                        style={{
                          height: "80px",
                          alignItems: "center",
                          borderBottom: "1px solid white",
                          color: "white",
                        }}
                      >
                        {title}
                      </h2>
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        flex: "1 1 auto",
                        height: "69%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <h6 style={{ fontWeight: "bold", color: "orange" }}>
                        {language}
                      </h6>
                      <h6
                        style={{
                          textAlign: "center",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                        }}
                      >
                        {description}
                      </h6>
                      <a
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "110px",
                          textAlign: "center",
                        }}
                      >
                        <LightSpeed right>See Code</LightSpeed>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ProjectCard;
