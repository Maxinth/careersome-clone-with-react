import React from "react";
import data from "./data";
import SkillDefinition from "./SkillDefinition";

const SkillDefinitions = ({ currentSkill }) => {
  // custom function to show SkillDefinition component corresponding to skill click
  const showWhenSkillIs = (id) => {
    return currentSkill === "" ? (
      <SkillDefinition {...data["defaultView"]} />
    ) : currentSkill === id ? (
      <SkillDefinition {...data[id]} />
    ) : null;
  };

  return (
    <div className="skillDefinitions">
      <>
        {/* initially show this when currentSkill === "" */}
        {showWhenSkillIs("")}
        <>
          {/* SEE COMMENTS */}
          {currentSkill === "" ? null : (
            <>
              {showWhenSkillIs("Adaptability")}
              {showWhenSkillIs("attentionToDetail")}
              {showWhenSkillIs("criticalThinking")}
              {showWhenSkillIs("communication")}
              {showWhenSkillIs("listening")}
              {showWhenSkillIs("manualDexterity")}
              {showWhenSkillIs("memory")}
              {showWhenSkillIs("multitasking")}
              {showWhenSkillIs("selfConfidence")}
              {showWhenSkillIs("selfControl")}
              {showWhenSkillIs("stamina")}
              {showWhenSkillIs("stressManagement")}
              {showWhenSkillIs("teamwork")}
              {showWhenSkillIs("timeManagement")}
            </>
          )}
        </>
      </>
    </div>
  );
};

export default SkillDefinitions;

/*

<SkillDefinition {...data[id]} /> Gets the properties on each object as the case
may be.

instead of writing out each property name and spreading it out as

<SkillDefinition {...Adaptability} /> - for instance 


LINE 20: Ensures that the other Definitions are only shown when currentSkill has a value.

Trying to conditionally render it like below causes the other Definitions to be hidden on click after
 the default view disappears (when currentSkill has a value other than "")

{
  currentSkill === "" && (
            <>
                {showWhenSkillIs("Adaptability")}
                {showWhenSkillIs("attentionToDetail")}
                {showWhenSkillIs("criticalThinking")}
                {showWhenSkillIs("communication")}
                {showWhenSkillIs("listening")}
                {showWhenSkillIs("manualDexterity")}
                {showWhenSkillIs("memory")}
                {showWhenSkillIs("multitasking")}
                {showWhenSkillIs("stamina")}
                {showWhenSkillIs("stressManagement")}
                {showWhenSkillIs("teamwork")}
                {showWhenSkillIs("timeManagement")}
              </>
            )

}


*/
