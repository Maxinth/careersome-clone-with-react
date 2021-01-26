import React from "react";
import SkillsContainer from "../components/skillsPageComponent/SkillsContainer";
import useDocumentTitle from "../components/UseTitle";
const Skills = () => {
  useDocumentTitle("Skills");
  return <SkillsContainer />;
};

export default Skills;
