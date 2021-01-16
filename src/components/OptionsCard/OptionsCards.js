import React from "react";
import OptionsCard from "./OptionsCard";
import "./optionsCards.css";
import data from "./cardsData";

const OptionsCards = () => {
  return (
    <div className="optionsCards">
      {data.map((item) => (
        <OptionsCard key={item.text} {...item} />
      ))}
    </div>
  );
};

export default OptionsCards;
