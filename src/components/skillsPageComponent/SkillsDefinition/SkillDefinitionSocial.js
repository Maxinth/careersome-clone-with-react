import React from "react";

import SkillsSocialDropDown from "./SkillsSocialDropDown";
import data from "./definitionsSocialData";
import { useGlobalContext } from "../../context";
const SkillDefinitionSocial = () => {
  const { showDrop, makeShowDropVisible, hideDropBox } = useGlobalContext();

  return (
    <section className="skillDefinition__socialContainer">
      <h3 className="skillDefinition__socialTitle">Share This page</h3>
      <div className="skillDefinition__Container">
        {data.map((item) => {
          const hoverHandler = () => {
            if (item.iconClass === "add") {
              makeShowDropVisible();
            }
            // else do nothing
            return;
          };
          return (
            <span
              className="skillDefinition__iconContainer"
              key={item.iconClass}
              onMouseOver={hoverHandler}
            >
              {item.icon}
            </span>
          );
        })}
      </div>
      <SkillsSocialDropDown show={showDrop} hoverOut={hideDropBox} />
    </section>
  );
};

export default SkillDefinitionSocial;
