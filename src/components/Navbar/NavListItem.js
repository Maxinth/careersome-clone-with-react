import React from "react";
import { Link } from "react-router-dom";
const NavListItem = ({ itemName }) => {
  // const hideItem =
  //   itemName === "skills and attribute" ||
  //   itemName === "sign up" ||
  //   itemName === "login" ||
  //   itemName === "blog"
  //     ? "isHidden"
  //     : "isShown";
  return (
    <li
      className={`nav__listItem 
    
    `}
    >
      <Link to="/" className="nav__itemLink">
        {itemName}
      </Link>
    </li>
  );
};

export default NavListItem;
