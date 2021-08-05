import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
const Certificate = ({ url, title, img }) => {
  var loc =
    "https://raw.githubusercontent.com/Niket-iiitu/Portfolio/main/src/certificate/" +
    img;
  console.log(process.env.PUBLIC_URL);
  return (
    <div>
      <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="HomeScreenAchievementsCard">
              <div className="row">
                <div item xs={3} sm={3} className="col-sm">
                  <div className="HomeScreenSkillContentC">
                    <img
                      src={loc}
                      alt="Click to open"
                      style={{ height: "300px", width: "400px" }}
                      onClick={() => {
                        window.open(url);
                      }}
                    />
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
export default Certificate;
// <Card className={classes.card}>
//   <CardMedia className={classes.media} image={url}></CardMedia>
//   <div div class={classes.overlay}>
//     <Typography variant="h6">{title}</Typography>
//   </div>
// </Card>
