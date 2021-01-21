import React from "react";

import SkillsSocialDropDown from "./SkillsSocialDropDown";
import initialIconsData from "./definitionsSocialData";
import socialDropDownData from "./socialDropDownData";

import { useGlobalContext } from "../../context";
const SkillDefinitionSocial = () => {
  const {
    showDrop,
    makeShowDropVisible,
    hideDropBox,
    toggleModalView,
  } = useGlobalContext();

  return (
    <section className="skillDefinition__socialContainer">
      <h3 className="skillDefinition__socialTitle">Share This page</h3>
      <div className="skillDefinition__Container">
        {initialIconsData.map((item) => {
          // see comments
          const hoverHandler = () => {
            if (item.iconClass === "add") {
              makeShowDropVisible();
            }
            // else do nothing
            return;
          };

          const showModalHandler = () => {
            if (item.iconClass === "add") {
              toggleModalView();
              hideDropBox();
            }
            // else do nothing
            return;
          };
          return (
            <span
              className="skillDefinition__iconContainer"
              key={item.iconClass}
              onMouseOver={hoverHandler}
              onClick={showModalHandler}
            >
              {item.icon}
            </span>
          );
        })}
      </div>
      <SkillsSocialDropDown
        show={showDrop}
        hoverOut={hideDropBox}
        data={socialDropDownData}
      />
    </section>
  );
};

export default SkillDefinitionSocial;

/*
      ===== hoverHandler ====

      const hoverHandler = () => {
            if (item.iconClass === "add") {
              makeShowDropVisible();
            }
            // else do nothing
            return;
      };

      hoverHandler is applied to every span.skillDefinition__iconContainer element but only
      the item whose iconClass === 'add' causes the showDrop to change - see handler
 

*/
