import React, { useState } from "react";
import "./skills.css";
import data from "./data";
import SkillDefinitions from "./SkillsDefinition/SkillDefinitions";
import definitionsData from "./SkillsDefinition/data";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const SkillsContainer = () => {
  const [skill, setSkill] = useState("");
  // creating an array from the key properties of the definitionData object.
  const definitionsTitleArray = Object.keys(definitionsData);

  const { variantProps, pageVariant } = useVariants();

  return (
    <motion.section
      className="skills"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <div className="skills__container">
        <h3 className="skills__heading">Skills and Attributes</h3>
        <p className="skills__text">
          Here are some of the most common skills and attributes that employers
          may require from you. We've provided basic and brief descriptions of
          them and tips on how to build or develop them.{" "}
        </p>
        <ul className="skills__listContainer">
          {data.map((item, index) => {
            const { name, id } = item;
            const skillInView = skill === id ? "isActive" : "";
            return (
              <li
                key={id}
                className={`skills__listItem ${skillInView}`}
                // sets the skill to the property name that matches this index on the array
                onClick={() => setSkill(definitionsTitleArray[index])}
                // see SkillsDefinitions for reason
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <SkillDefinitions currentSkill={skill} />
    </motion.section>
  );
};

export default SkillsContainer;
