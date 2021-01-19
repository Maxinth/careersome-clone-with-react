import React from "react";
import CareerCard from "./CareerCard";
import "./careers.css";

import data from "./data";
const CareerContainer = () => {
  const { pageOneCards } = data;
  return (
    <section className="career">
      <div className="career__container">
        <h2 className="career__heading">Career Overview</h2>
        <p className="career__text">
          We use the data we gathered from job listings, university websites,
          discussions with career experts and other sources, which we have
          appropriately referenced, to provide you with clear and accurate
          information about different professionals so that you can know what
          they do, where they work, their working conditions, what qualities are
          required from them, etc.
        </p>
        <section className="career__cards">
          {pageOneCards.map((item, index) => (
            <CareerCard key={index} itemName={item} />
          ))}
        </section>
        <section className="career__pagination">
          <div className="career__page">1</div>
          <div className="career__page">2</div>
          <div className="career__page">3</div>
        </section>
      </div>
    </section>
  );
};

export default CareerContainer;
