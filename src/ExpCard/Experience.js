import React from "react";
import ExpCard from "./Card/Exp";

const ExpSet = () => {
  return (
    <div
      className="row"
      style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ExpCard
        title="Digi Class"
        language="Node JS, React, Redux, Bootstrap, Mongo DB, Material UI"
        url="https://tools-forest.netlify.app/"
        link="https://github.com/GroupProject1ShopOnline"
        description="Started during COVID-19 with a goal for creating a dedicated online learning platform 
        for institute(IIITU). A team was arranged to work from backend, frontend, database management, etc.
        The task was to create a site that not just have features of a proper online classroom but shold contain 
        organised data and task in different section, more interactive, and specific to the demand of the institute.
        The site must also be easy to update, fast, and secure. Furter least number of API calls and optimal use of space available
        should do done. Project was done in a team and so required team work and leadership throught the planing, designing and 
        programming phase. "
      />
    </div>
  );
};

export default ExpSet;
