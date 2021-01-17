import React from "react";
import "./testimonial.css";
const Testimonial = ({ testimony, owner, position }) => {
  return (
    <div className={`testimonial ${position}`}>
      <p className="testimonial__text">{testimony}</p>
      <p className="testimonial__owner">{owner}</p>
    </div>
  );
};

export default Testimonial;
