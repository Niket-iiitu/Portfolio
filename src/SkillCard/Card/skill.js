import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
const SkillCard = ({ url, title }) => {
  return (
    <div>
      <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="HomeScreenAchievementsCard">
              <div className="row">
                <div item xs={3} sm={3} className="col-sm">
                  <div className="HomeScreenSkillContent">
                    <img src={url} alt="skill" />
                    <p className="HomeScreenSkillContentP">{title}</p>
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
export default SkillCard;
