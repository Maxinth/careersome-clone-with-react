import React, { useState, useRef, useEffect } from "react";
// import testImg from "../../assets/project1.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./optionsCard.css";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

let direction;

const OptionsCard = ({
  optionsImg,
  text,
  infoText,
  secondParagraph,
  cardIndex,
}) => {
  const initialViewRef = useRef();
  //   let initialViewHeight = initialViewRef.current.clientHeight;
  const [cardHeight, setCardHeight] = useState("auto");
  //   const [cardWidth, setCardWidth] = useState("100%");
  const [switchCard, setSwitchCard] = useState(false);
  const isCardSwitched = switchCard ? "cardSwitched" : "";
  const toggleCard = () => setSwitchCard(!switchCard);

  const { landRVariant, variantProps } = useVariants();

  switch (cardIndex.toString()) {
    case "0":
    case "1":
    case "2":
      direction = "-100vw";
      break;
    case "3":
    case "4":
    case "5":
      direction = "100vw";
      break;
    default:
      direction = "0vw";
      break;
  }
  useEffect(() => {
    let initialViewHeight = initialViewRef.current.clientHeight;

    console.log(initialViewHeight);
    setCardHeight(initialViewHeight);
  }, [switchCard]);

  const moreInfoHeight = switchCard ? cardHeight : 0;

  return (
    <motion.section
      className={`optionsCard ${isCardSwitched}`}
      style={{ height: switchCard ? `${cardHeight / 2}px` : "auto" }}
      {...variantProps}
      variants={landRVariant(direction, 1)}
      // style={{
      //   height: `${cardHeight}px`,
      // }}

      //   style={{ height: switchCard ? "unset" : "unset" }}
    >
      <section className="optionsCard__viewContainer">
        {/* initial view */}
        <div
          className="optionsCard__initialView"
          ref={initialViewRef}
          // style={{ height: `${switchCard ? 0 : cardHeight}px` }}
        >
          <img
            src={optionsImg}
            alt="options card"
            className="optionsCard__img"
          />
          <div className="optionsCard__title">
            <span className="optionsCard__text">{text}</span>
            <MoreVertIcon onClick={toggleCard} />
          </div>
          <p className="optionsCard__category">{text}</p>
        </div>

        {/* moreInfo */}
        <section
          className="optionsCard__moreInfo"
          style={{ height: `${(5.75 * moreInfoHeight) / 6}px` }}
          // style={{ height: `${switchCard ? "unset" : "0px"}` }}
        >
          <div className="optionsCard__infoTitle">
            <span className="optionsCard__heading">{text}</span>
            <CloseIcon
              className="optionsCard__closeIcon"
              onClick={toggleCard}
            />
          </div>
          <p className="optionsCard__infoText">{infoText}</p>
          {secondParagraph && (
            <p className="optionsCard__secondParagraph">{secondParagraph}</p>
          )}
        </section>
      </section>
    </motion.section>
  );
};

export default OptionsCard;
