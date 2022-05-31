import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";

const ExpCard = ({ title, language, description, duration, institute }) => {
  return (
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
                            // borderBottom: "1px solid grey",
                            color: "rgb(105,105,105)",
                            fontWeight: "bold",
                            paddingTop: "10px",
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
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "center",
                              color: "rgb(128,128,128)",
                            }}
                          >
                            <h6>
                              <b>
                                <p>Company: {institute}</p>
                              </b>
                            </h6>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "center",
                              color: "rgb(128,128,128)",
                            }}
                          >
                            <h6>
                              <b>
                                <p>Duration: {duration}</p>
                              </b>
                            </h6>
                          </div>
                        </div>
                        <h6
                          style={{
                            fontWeight: "bold",
                            textAlign: "left",
                            paddingLeft: "5px",
                            color: "rgb(255,69,0)",
                          }}
                        >
                          Teck Stack Used: {language}
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
  );
};

export default ExpCard;
