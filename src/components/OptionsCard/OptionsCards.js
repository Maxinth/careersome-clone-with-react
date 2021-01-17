import React from "react";
import OptionsCard from "./OptionsCard";
import "./optionsCards.css";
import data from "./cardsData";

const OptionsCards = () => {
  return (
    <section className="optionsCards">
      <div className="optionsCards__container">
        {data.map((item) => (
          <OptionsCard key={item.text} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OptionsCards;
