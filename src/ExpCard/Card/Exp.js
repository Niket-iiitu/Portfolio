import React from "react";
import "./style.css";
import "./Exp.css";
import Fade from "react-reveal/Fade";

const ExpCard = ({ title, language, description, duration, institute }) => {
  return (
    <div>
      <Fade left cascade>
        <div title={title}>
          <div className="container">
            <div className="ProjectScreenContentE">
              <div className="ExperienceBody">
                <div>
                  <h2 className="ExperienceHeading">{institute}</h2>
                </div>
                <div className="ExperienceContent">
                  <div>
                    <div className="ExperienceSubheading">{title}</div>
                    <div className="ExperienceSubheading">{duration}</div>
                  </div>
                  <div className="ExperienceTeckStack">{language}</div>
                  <div className="ExperienceDescription">
                    <ul>
                      {description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ExpCard;
