import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
const SkillCard2 = ({ location, title }) => {
  return (
    <div>
      <Fade right cascade>
        <div className="container">
          <div className="row">
            <div className="HomeScreenAchievementsCard">
              <div className="row">
                <div item xs={3} sm={3} className="col-sm">
                  <div className="HomeScreenSkillContent">
                    <img
                      src={process.env.PUBLIC_URL + location}
                      alt="skill"
                      className="SkillContent"
                    />
                    <p className="HomeScreenSkillContentTitle">{title}</p>
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
export default SkillCard2;
