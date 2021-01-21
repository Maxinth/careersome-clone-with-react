import React from "react";
import SkillsSocialDropDown from "./SkillsSocialDropDown";
import socialDropData from "./modalSocialDropDownData";
import "./modalSocialDrop.css";
import { useGlobalContext } from "../../context";

const ModalSocialDropDown = () => {
  const { toggleModalView } = useGlobalContext();
  return (
    <>
      <section className="modalDropBox" onClick={toggleModalView}></section>
      <div className="modalSocialDropDown">
        <SkillsSocialDropDown data={socialDropData} Modal={true} />
      </div>
    </>
  );
};

export default ModalSocialDropDown;
