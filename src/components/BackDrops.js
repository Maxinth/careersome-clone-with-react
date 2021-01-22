import React from "react";
import { useGlobalContext } from "./context";
import { motion } from "framer-motion";
import { useVariants } from "./useVariants";
import ModalSocialDropDown from "../components/skillsPageComponent/SkillsDefinition/ModalSocialDropDown";

const BackDrops = () => {
  const { showModal, sideBarOpen, toggleSideBar } = useGlobalContext();
  const { pageVariant, variantProps } = useVariants();
  return (
    <>
      {showModal && <ModalSocialDropDown />}
      {sideBarOpen && (
        <motion.div
          variants={pageVariant(0.5, 0)}
          {...variantProps}
          className="nav__sideBarBackdrop"
          onClick={toggleSideBar}
        ></motion.div>
      )}
    </>
  );
};

export default BackDrops;
