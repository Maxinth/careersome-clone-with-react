import React from "react";
import "./heroSection.css";
import heroImg from "../../assets/wave-purple.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
const HeroSection = () => {
  const { cardHover: btnHover, variantProps } = useVariants();
  return (
    <section className="heroSection">
      <div className="heroSection__container">
        <section className="heroSection__main">
          <h3 className="heroSection__title">Welcome to Careersome</h3>
          <p className="heroSection__text">
            Careersome exists to help young Nigerians make smart, well-informed
            decisions about their careers and enter into the labour market
          </p>
          <div className="heroSection__btnContainer">
            <motion.div
              variants={btnHover}
              {...variantProps}
              whileHover="hover"
            >
              <Link to="/internships-in-nigeria">
                <button className="heroSection__btn entry">internships</button>
              </Link>
            </motion.div>
            <motion.div
              variants={btnHover}
              {...variantProps}
              whileHover="hover"
            >
              <Link to="/entry-level-jobs">
                <button className="heroSection__btn">entry level jobs</button>
              </Link>
            </motion.div>
          </div>
        </section>
        <div className="heroSection__imgContainer">
          <img src={heroImg} alt="hero img" className="heroSection__img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
