import React from "react";
import SkillsSocialDropDown from "./SkillsSocialDropDown";
import socialDropData from "./modalSocialDropDownData";
import "./modalSocialDrop.css";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import { useVariants } from "../../useVariants";

const ModalSocialDropDown = () => {
  const { toggleModalView } = useGlobalContext();
  const { variantProps, pageVariant } = useVariants();
  return (
    <>
      <motion.div
        className="modalSocialDropDown"
        variants={pageVariant(0, 0)}
        {...variantProps}
      >
        <SkillsSocialDropDown data={socialDropData} Modal={true} />
      </motion.div>
      <motion.section
        className="modalDropBox"
        onClick={toggleModalView}
        variants={pageVariant(1, 0)}
        {...variantProps}
      ></motion.section>
    </>
  );
};

export default ModalSocialDropDown;
