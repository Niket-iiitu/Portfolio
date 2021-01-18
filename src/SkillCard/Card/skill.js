import React from "react";
import "./style.css";
const SkillCard = ({ url, title }) => {
  return (
    <div>
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
    </div>
  );
};
export default SkillCard;
// <Card className={classes.card}>
//   <CardMedia className={classes.media} image={url}></CardMedia>
//   <div div class={classes.overlay}>
//     <Typography variant="h6">{title}</Typography>
//   </div>
// </Card>
