import React, { useState, useRef, useEffect } from "react";
// import testImg from "../../assets/project1.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./optionsCard.css";
import CloseIcon from "@material-ui/icons/Close";

const OptionsCard = ({ optionsImg, text, infoText, secondParagraph }) => {
  const initialViewRef = useRef();
  //   let initialViewHeight = initialViewRef.current.clientHeight;
  const [cardHeight, setCardHeight] = useState("auto");
  //   const [cardWidth, setCardWidth] = useState("100%");
  const [switchCard, setSwitchCard] = useState(false);
  const isCardSwitched = switchCard ? "cardSwitched" : "";
  const toggleCard = () => setSwitchCard(!switchCard);

  useEffect(() => {
    let initialViewHeight = initialViewRef.current.clientHeight;

    console.log(initialViewHeight);
    setCardHeight(initialViewHeight);
    // setCardWidth(initialViewWidth);
  }, [switchCard]);

  const moreInfoHeight = switchCard ? cardHeight : 0;
  console.log("cardHeight = ", cardHeight);
  return (
    <section
      className={`optionsCard ${isCardSwitched}`}
      style={{ height: switchCard ? `${cardHeight / 2}px` : "auto" }}

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
    </section>
  );
};

export default OptionsCard;
