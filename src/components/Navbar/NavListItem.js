import React from "react";
import { Link } from "react-router-dom";
const NavListItem = ({ linkText, linkRef }) => {
  // const hideItem =
  //   itemName === "skills and attribute" ||
  //   itemName === "sign up" ||
  //   itemName === "login" ||
  //   itemName === "blog"
  //     ? "isHidden"
  //     : "isShown";
  return (
    <li className="nav__listItem">
      <Link to={linkRef} className="nav__itemLink">
        {linkText}
      </Link>
    </li>
  );
};

export default NavListItem;
