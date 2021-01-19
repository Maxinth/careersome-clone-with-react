import React from "react";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

let direction;

const AboutBlock = ({
  firstHeading,
  firstText,
  subHeading,
  secondText,
  aboutBlockIndex,
}) => {
  switch (aboutBlockIndex.toString()) {
    case "0":
    case "3":
    case "4":
      direction = "-100vw";
      break;
    case "1":
    case "2":
      direction = "100vw";
      break;
    default:
      direction = "0vw";
      break;
  }
  console.log(aboutBlockIndex);
  const { variantProps, landRVariant } = useVariants();
  return (
    <motion.div
      className="aboutBlock"
      variants={landRVariant(direction)}
      {...variantProps}
    >
      <h3 className="aboutBlock__heading">{firstHeading}</h3>
      <p className="aboutBlock__text">{firstText}</p>

      {subHeading && (
        <h5 className="aboutBlock__secondHeading">{subHeading}</h5>
      )}
      {secondText && <p className="aboutBlock__text">{secondText}</p>}
    </motion.div>
  );
};

export default AboutBlock;
