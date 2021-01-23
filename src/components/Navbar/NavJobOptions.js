import React from "react";
import { Link } from "react-router-dom";
import "./navJobsOption.css";
import data from "./navJobsData";
const NavJobOptions = () => {
  return (
    <ul className="navJobOptions">
      {data.map((item, index) => (
        <li className="navJobOptions__listItem" key={index}>
          <Link to={item.goTo} className="navJobOptions__link">
            {item.linkText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavJobOptions;
