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
        // display: "flex",
        alignContent: "center",
        width: "100%",
      }}
    >
      <ProjectCard
        title="Tools Online"
        language="Node JS, React, Redux, Bootstrap, Mongo DB"
        url="https://tools-forest.netlify.app/"
        link="https://github.com/GroupProject1ShopOnline"
        description="A website to hire costly tools on rent from the nearest owner in a flexible and easy manner. (Group Project)"
      />

      <ProjectCard
        title="News AI"
        language="Node JS, React, Bootstrap, Alan AI"
        url="https://niket-iiitu.github.io/NewsAI/"
        link="https://github.com/Niket-iiitu/NewsAI"
        description="Voice Controlled News site based on Alan Ai and React JS, which can select, read, and open news on command."
      />

      <ProjectCard
        title="Memories"
        language="Node JS, React, Redux, Bootstrap, Mongo DB"
        url="https://niket-iiitu.github.io/Memories/"
        link="https://github.com/Niket-iiitu/MemoriesBackend"
        description="A website to share the most memorable moments of your life with others. You can also like others post."
      />

      <ProjectCard
        title="Student Management"
        language="Python"
        url="https://github.com/Niket-iiitu/Student-Management"
        link="https://github.com/Niket-iiitu/Student-Management"
        description="Offline desktop application that allows the user to manage details of students in schools/colleges. Takes general line input to understand the task to be conducted."
      />

      <ProjectCard
        title="Code Chat"
        language="Java, Android Studio, Firebase"
        url="https://github.com/Niket-iiitu/Code_Chat_App"
        link="https://github.com/Niket-iiitu/Code_Chat"
        description="An online mobile(android) application made for secured communication through use of firebase ID. Provides complete online backup of data."
      />

      <ProjectCard
        title="Task Share"
        language="Dart, Flutter, Firebase"
        url="https://github.com/Niket-iiitu/Task_Share"
        link="https://github.com/Niket-iiitu/Task_Share"
        description="An online mobile(android and ios) application for sharing and monitor task among employees/groups. Provides complete online backup of data."
      />
    </div>
  );
};

export default ProjectSet;
