import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
// import Roll from "react-reveal/Roll";
// import wallpaper from "../../images/BlueWallpaper.jpg";

const ExpCard = ({ title, language, description, duration }) => {
  return (
    // <Roll left>
    <Fade top cascade>
      <div title={title}>
        <div className="container">
          <div className="row">
            <div className="HomeScreenAchievementsCard">
              <div className="row">
                <div
                  item
                  xs={1}
                  sm={1}
                  className="col-sm"
                  style={{
                    maxWidth: "300px",
                  }}
                >
                  <div
                    className="ProjectScreenContentE"
                    style={{ display: "flex" }}
                  >
                    {/* <div
                      style={{
                        height: "100%",
                        width: "30%",
                      }}
                    >
                      <img
                        src={wallpaper}
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        alt="Experience"
                      />
                    </div> */}
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            height: "auto",
                            alignItems: "center",
                            borderBottom: "1px solid grey",
                            color: "rgb(62,108,255)",
                            fontWeight: "bold",
                          }}
                        >
                          {title}
                        </h2>
                      </div>
                      <div
                        style={{
                          flex: "auto",
                          height: "75%",
                          marginTop: "2%",
                        }}
                      >
                        <h6>
                          <p>Duration: {duration}</p>
                        </h6>
                        <h6
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            paddingLeft: "5px",
                            color: "orange",
                          }}
                        >
                          Skills Used: {language}
                        </h6>
                        <h6
                          style={{
                            textAlign: "justify",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            paddingTop: "10px",
                            color: "black",
                          }}
                        >
                          {description}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    // </Roll>
  );
};

export default ExpCard;

// backgroundImage: `url(${wallpaper})`,backgroundSize: "100% 100%",
