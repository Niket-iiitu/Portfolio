import React from "react";
import SkillCard from "./Card/skill";
import makeStyles from "./style";

const SkillSet = () => {
  const classes = makeStyles();
  return (
    <div
      className="row"
      style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        alignItems: "center",
      }}
    >
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png"
        title="C"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"
        title="C++"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
        title="Python"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
        title="Java"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/dart/dart.png"
        title="Dart"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        title="HTML"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        title="CSS"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        title="Node JS"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
        title="Bootstrap"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/kotlin/kotlin.png"
        title="Kotlin"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
        title="Git"
      />
      <SkillCard
        url="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        title="Git Hub"
      />
      <SkillCard
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png"
        title="Android Studio"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png"
        title="Flutter"
      />
      <SkillCard
        url="https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png"
        title="DSA"
      />
      <SkillCard
        url="http://impact10x.com/images/icons/icon-machine%20learning-200x200.jpg"
        title="ML"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
        title="Redux"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        title="React"
      />
      <SkillCard
        url="https://www.herokucdn.com/favicons/icon.svg"
        title="Heroku"
      />
      <SkillCard
        url="https://docs.cloudron.io/img/githubpages-logo.png"
        title="Git Pages"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
        title="Firebase"
      />
      <SkillCard
        url="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
        title="Mongo DB"
      />
    </div>
  );
};
export default SkillSet;
