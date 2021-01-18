import React from "react";
import ProjectCard from "./Card/project";

const ProjectSet = () => {
  return (
    <div
      className="row"
      style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        alignItems: "center",
      }}
    >
      <ProjectCard
        title="Student Management"
        language="Python"
        link="https://github.com/Niket-iiitu/Student-Management"
        description="Offline desktop application that allows the user to manage details of students in schools/collages. Takes general line input to understand the task to be conducted."
      />
      <ProjectCard
        title="Code Chat"
        language="Java, Android Studio, Firebase"
        link="https://github.com/Niket-iiitu/Code_Chat"
        description="An online mobile(android) application made for secured communication through use of firebase ID. Provides complete online backup of data."
      />
      <ProjectCard
        title="Task Share"
        language="Dart, Flutter, Firebase"
        link="https://github.com/Niket-iiitu/Task_Share"
        description="An online mobile(android and ios) application for sharing and monitor task among employees/groups. Provides complete online backup of data."
      />
      <ProjectCard
        title="Memories"
        language="Node JS, React, Redux, Bootstrap, Mongo DB"
        link="https://niket-iiitu.github.io/Memories/"
        description="A website to share the most memorable moments of your life with others. You can also like others post."
      />
    </div>
  );
};

export default ProjectSet;
