import React from "react";
import OptionsCard from "./OptionsCard";
import "./optionsCards.css";
import data from "./cardsData";

const OptionsCards = () => {
  return (
    <section className="optionsCards">
      <h3 className="optionsCards__title">Main Features</h3>
      <div className="optionsCards__container">
        {data.map((item, index) => (
          <OptionsCard key={item.text} {...item} cardIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default OptionsCards;
