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
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
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
    </div>
  );
};

export default ProjectSet;
