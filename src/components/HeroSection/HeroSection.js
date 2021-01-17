import React from "react";
import "./heroSection.css";
import heroImg from "../../assets/wave-purple.png";
const HeroSection = () => {
  return (
    <section className="heroSection">
      <section className="heroSection__main">
        <h3 className="heroSection__title">Welcome to Careersome</h3>
        <p className="heroSection__text">
          Careersome exists to help young Nigerians make smart, well-informed
          decisions about their careers and enter into the labour market
        </p>
        <div className="heroSection__btnContainer">
          <button className="heroSection__btn">internships</button>
          <button className="heroSection__btn">entry level jobs</button>
        </div>
      </section>
      <div className="heroSection__imgContainer">
        <img src={heroImg} alt="hero img" className="heroSection__img" />
      </div>
    </section>
  );
};

export default HeroSection;
