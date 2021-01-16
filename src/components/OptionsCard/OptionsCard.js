import React, { useState, useRef, useEffect } from "react";
import testImg from "../../assets/project1.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./optionsCard.css";
import CloseIcon from "@material-ui/icons/Close";

const OptionsCard = () => {
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
      style={{ height: switchCard ? `${cardHeight / 2}px` : "unset" }}
      //   style={{ height: switchCard ? "unset" : "unset" }}
    >
      <section className="optionsCard__viewContainer">
        {/* initial view */}
        <div
          className="optionsCard__initialView"
          ref={initialViewRef}
          // style={{ height: `${switchCard ? 0 : cardHeight}px` }}
        >
          <img src={testImg} alt="options card" className="optionsCard__img" />
          <div className="optionsCard__title">
            <span className="optionsCard__text">Internships in Nigeria </span>
            <MoreVertIcon onClick={toggleCard} />
          </div>
          <p className="optionsCard__category">Internships in Nigeria</p>
        </div>

        {/* moreInfo */}
        <section
          className="optionsCard__moreInfo"
          style={{ height: `${(3.5 * moreInfoHeight) / 6}px` }}
        >
          <div className="optionsCard__infoTitle">
            <span className="optionsCard__heading">Career Overview</span>
            <CloseIcon
              className="optionsCard__closeIcon"
              onClick={toggleCard}
            />
          </div>
          <p className="optionsCard__infoText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusantium ea qui placeat, eum, pariatur neque aliquam voluptates
            eius unde voluptas atque repudiandae, perferendis itaque architecto!
            Architecto, expedita. Debitis voluptas consectetur enim! Dolorem
            eaque aut cumque voluptatem! Ad maiores dolore nostrum ea aliquid
            itaque nemo, quod, placeat quas error quis odio? Quasi, cupiditate
            optio eius illo enim totam rerum doloremque. Laudantium voluptate
            maxime quas. Iure, beatae reprehenderit vel, nostrum, expedita
            delectus consectetur optio dolore explicabo atque velit tempore
            praesentium sint cumque quos. Quisquam deserunt commodi minus
            corporis cumque..
          </p>
        </section>
      </section>
    </section>
  );
};

export default OptionsCard;
