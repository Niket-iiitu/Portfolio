import React from "react";
import "./style.css";

const ProjectCard = ({ title, language, description, link }) => {
  return (
    <div>
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
                  maxWidth: "300px",
                  height: "auto",
                }}
              >
                <div
                  className="ProjectScreenContent"
                  style={{ backgroundColor: "rgb(33, 17, 180)" }}
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
                    <h6 style={{ fontWeight: "bold", color: "purple" }}>
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
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "110px",
                        textAlign: "center",
                      }}
                    >
                      See Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
