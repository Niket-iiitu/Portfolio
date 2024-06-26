import React from "react";
import SkillCard2 from "./Card/skill2";
import "./skills.css";

const SkillSet = () => {
  return (
    <div className="ExperienceSet">
      <SkillCard2 location="/icons/java.jpeg" title="Java" />
      <SkillCard2 location="/icons/spring.png" title="Spring" />
      <SkillCard2 location="/icons/maven.png" title="Maven" />
      <SkillCard2 location="/icons/nodejs.png" title="Node JS" />
      <SkillCard2 location="/icons/react.png" title="React" />
      <SkillCard2 location="/icons/html.png" title="HTML" />
      <SkillCard2 location="/icons/css.png" title="CSS" />
      <SkillCard2 location="/icons/sql.jpeg" title="SQL" />
      <SkillCard2 location="/icons/git.png" title="Git" />
      <SkillCard2 location="/icons/dsa.png" title="DSA" />
    </div>
  );
};
export default SkillSet;
