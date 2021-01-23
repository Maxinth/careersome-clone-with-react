import React from "react";
import AboutBlock from "./AboutBlock";
import data from "./data";
import "./aboutBlock.css";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
const AboutContainer = () => {
  const { aboutBlockContainer, variantProps, pageVariant } = useVariants();
  return (
    <motion.section
      className="about"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <div className="about__container">
        <h1 className="about__heading">
          About <span className="about__headingSome">Career</span>some
        </h1>
        <p className="about__text">
          Careersome.com exists to help young Nigerians make smart,
          well-informed decisions about their career and enter into the labour
          market
        </p>
        <h3 className="about__subHeading">Main Features</h3>
        <motion.section
          className="aboutBlock__container"
          variants={aboutBlockContainer}
        >
          {data.map((item, index) => (
            <AboutBlock
              key={item.firstHeading}
              {...item}
              aboutBlockIndex={index}
            />
          ))}
        </motion.section>
      </div>
    </motion.section>
  );
};

export default AboutContainer;
