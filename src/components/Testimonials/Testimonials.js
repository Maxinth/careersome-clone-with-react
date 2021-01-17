import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import "./testimonials.css";
import data from "./data";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Testimonials = () => {
  const [items] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="testimonials">
      <h3 className="testimonials__title">Testimonials</h3>
      <div className="testimonials__circleControls">
        {items.map((item, itemIndex) => {
          let circleColored = itemIndex === index ? "inView" : "";
          return (
            <FiberManualRecordIcon
              className={`testimonials__circle ${circleColored}`}
              key={item.owner}
              onClick={() => setIndex(itemIndex)}
            />
          );
        })}
      </div>
      <section className="testimonials__container">
        {items.map((item, itemIndex) => {
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === items.length - 1)
          ) {
            position = "lastSlide";
          }
          return <Testimonial key={item.owner} {...item} position={position} />;
        })}
      </section>
    </section>
  );
};

export default Testimonials;
