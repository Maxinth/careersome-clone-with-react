import React from "react";
import CareerCard from "./CareerCard";
const GeneratePageCards = ({ pageNo }) => {
  return (
    <>
      {pageNo.map((item, index) => (
        <CareerCard key={index} itemName={item} cardIndex={index} />
      ))}
    </>
  );
};

export default GeneratePageCards;
