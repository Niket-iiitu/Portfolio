import React from "react";
import ExpCard from "./Card/Exp";

const ExpSet = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        // className="row"
        style={{
          display: "flex",
          paddingLeft: "60px",
          paddingRight: "40px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ExpCard
          title="Developer Intern"
          language="Node JS, Python, Mass Data Management, React JS, Postgres SQL, AWS EC2, AWS Lightsail, Material UI"
          duration="6 Months (Dec 2021-Jun 2022)"
          institute="AJVA FinTech Private Limited"
          description="This internship was conducted by AJVA FinTech private limited, and during this I worked on EC2 instances running batch process and 
          improved their efficiency form previous 10K entries with 60% success to 30K entries with approx. 
          95% success. Machines were able to run for 3 times longer without any restart. 
          Required specs reduce to micro instance. I also programmed a MERN based 3 tier websites, for monitoring, filtering and downloading data. This 
          site is used to filter and download 100K+, from a DB with multiple tables, with each processing 1+ Crore entries connected through foreign keys, 
          in one-to-many relation. Mass data management and interactive UI were innovatively integrated in a way that the user can effortlessly find 
          required data, while still maintaining a real-time (< 0.5 sec delay) performance and low load on server side."
        />
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: "60px",
          paddingRight: "40px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ExpCard
          title="MERN Intern"
          language="Node JS, React, Redux, Bootstrap, Mongo DB, Material UI"
          duration="5 Months (Mar 2021-Jul 2021)"
          institute="IIIT Una"
          description="Started during COVID-19 with a goal for creating a dedicated online learning platform 
        for institute(IIITU). A team was arranged to work from backend, frontend, database management, etc.
        The task was to create a site that not just have features of a proper online classroom but shold contain 
        organised data and task in different section, more interactive, and specific to the demand of the institute.
        The site must also be easy to update, fast, and secure. Furter least number of API calls and optimal use of space available
        should do done. Project was done in a team and so required team work and leadership throught the planing, designing and 
        programming phase. "
        />
      </div>
    </div>
  );
};

export default ExpSet;
