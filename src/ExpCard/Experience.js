import React from "react";
import ExpCard from "./Card/Exp";
import "./Experience.css";

const ExpSet = () => {
  return (
    <div className="ExperienceBody">
      <div className="ExperienceCard">
        <ExpCard
          title="Software Developer"
          language="Java, Spring, Maven, React JS, SQL"
          duration="Oct 2023 - Present"
          institute="Jio"
          description={[
            "Improved stability and performance for the Jio Enterprise Portal.",
            "Migrated projects from JSP and JavaScript to React for improved performance and maintainability.",
            "Developed a mechanism for bandwidth changes in existing subscriptions, enabling the portal to gather all available options, display the most viable ones, and facilitate approval by relevant officials based on the chosen solution.",
            "Optimized backend by implementing caching to retrieve pre-processed data, reducing database load and improving performance.",
          ]}
        />
      </div>
      <div className="ExperienceCard">
        <ExpCard
          title="Developer Intern"
          language="React JS, Node JS, Express JS, SQL"
          duration="Dec 2021 - Jun 2022"
          institute="AJVA FinTech"
          description={[
            "Enhanced existing products by adding features such as email notifications, tracking failed and successful entries during large data processing, and automatically identifying and deleting unwanted cached files etc.",
            "Developed MERN stack websites (Frontend, Backend, and API) for monitoring, filtering, and downloading data from a PostgreSQL database with tables containing over 10 million entries.",
          ]}
        />
      </div>
    </div>
  );
};

export default ExpSet;
