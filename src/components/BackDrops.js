import React from "react";
import { useGlobalContext } from "./context";
import ModalSocialDropDown from "../components/skillsPageComponent/SkillsDefinition/ModalSocialDropDown";

const BackDrops = () => {
  const { showModal, sideBarOpen, toggleSideBar } = useGlobalContext();
  return (
    <>
      {showModal && <ModalSocialDropDown />}
      {sideBarOpen && (
        <div className="nav__sideBarBackdrop" onClick={toggleSideBar}></div>
      )}
    </>
  );
};

export default BackDrops;
