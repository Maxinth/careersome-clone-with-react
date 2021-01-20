import React from "react";
import data from "./data";
import SkillDefinition from "./SkillDefinition";

const SkillDefinitions = () => {
    const { Adaptability, attentionToDetail, criticalThinking, communication,
        listening, manualDexterity, memory, multitasking, stamina, stressManagement, teamwork, timeManagement} = data;
  return (
    <div className="skillDefinitions">
          {/* <SkillDefinition {...Adaptability} /> */}
          <SkillDefinition {...attentionToDetail} />
          {/* <SkillDefinition {...criticalThinking} />
          <SkillDefinition {...communication} />
          <SkillDefinition {...listening} />
          <SkillDefinition {...manualDexterity} />
          <SkillDefinition {...memory} />
          <SkillDefinition {...multitasking} />
          <SkillDefinition {...stamina} />
          <SkillDefinition {...stressManagement} />
          <SkillDefinition {...teamwork} />
          <SkillDefinition {...timeManagement} /> */}
    </div>
  );
};

export default SkillDefinitions;
