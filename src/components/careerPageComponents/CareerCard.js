import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./careerCard.css";

const CareerCard = ({ itemName }) => {
  return (
    <div className="careerCard">
      <div className="careerCard__container">
        <h3 className="careerCard__mainTitle">{itemName}</h3>
        <p className="careerCard__title">Careers in {itemName}</p>
        <button className="careerCard__btn" type="button">
          view
        </button>
        <button className="careerCard__addBtn" type="button">
          <AddIcon className="careerCard__addIcon" />
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
