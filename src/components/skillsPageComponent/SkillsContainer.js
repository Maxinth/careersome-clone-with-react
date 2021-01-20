import React from "react";
import "./skills.css";
import data from "./data";
const SkillsContainer = () => {
  return (
    <section className="skills">
      <h3 className="skills__heading">Skills and Attributes</h3>
      <p className="skills__text">
        Here are some of the most common skills and attributes that employers
        may require from you. We've provided basic and brief descriptions of
        them and tips on how to build or develop them.{" "}
      </p>
      <ul className="skills__listContainer">
        {data.map((item) => (
          <li key={item} className="skills__listItem">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsContainer;
