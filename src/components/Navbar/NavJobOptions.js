import React from "react";
import { Link } from "react-router-dom";
import "./navJobsOption.css";
const NavJobOptions = () => {
  return (
    <ul className="navJobOptions">
      <li className="navJobOptions__listItem">
        <Link to="/" className="navJobOptions__link">
          Post Jobs Free
        </Link>
      </li>

      <li className="navJobOptions__listItem">
        <Link to="/" className="navJobOptions__link">
          Entry Level Jobs in Nigeria
        </Link>
      </li>
      <li className="navJobOptions__listItem">
        <Link to="/" className="navJobOptions__link">
          Internships in Nigeria
        </Link>
      </li>
    </ul>
  );
};

export default NavJobOptions;
