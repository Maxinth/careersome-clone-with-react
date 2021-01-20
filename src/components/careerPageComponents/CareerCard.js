import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./careerCard.css";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const CareerCard = ({ itemName, cardIndex }) => {
  const { variantProps, pageVariant, cardHover } = useVariants();

  return (
    <motion.div
      className="careerCard"
      variants={pageVariant(2, (cardIndex + 1) * 0.5)}
      {...variantProps}
    >
      <div className="careerCard__container">
        <h3 className="careerCard__mainTitle">{itemName}</h3>
        <p className="careerCard__title">Careers in {itemName}</p>
        <motion.button
          className="careerCard__btn"
          type="button"
          variants={cardHover}
          whileHover="hover"
        >
          view
        </motion.button>
        <motion.button
          className="careerCard__addBtn"
          type="button"
          variants={cardHover}
          whileHover="hover"
        >
          <AddIcon className="careerCard__addIcon" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CareerCard;
