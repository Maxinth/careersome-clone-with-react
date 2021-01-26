import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navJobsOption.css";
import data from "./navJobsData";

const NavJobOptions = () => {
  const location = useLocation();

  return (
    <ul className="navJobOptions">
      {data.map((item, index) => {
        const classByLocation =
          location.pathname === item.goTo ? "activeListLink" : "";
        return (
          <li
            className={`navJobOptions__listItem ${classByLocation}`}
            key={index}
          >
            <Link to={item.goTo} className="navJobOptions__link">
              {item.linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavJobOptions;
