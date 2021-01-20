import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavListItem = ({ linkText, linkRef }) => {
  const location = useLocation();

  const makeActiveLink = (currentPath) =>
    location.pathname === currentPath ? "active" : "";
  return (
    <li className="nav__listItem">
      <NavLink
        to={linkRef}
        className="nav__itemLink"
        activeClassName={makeActiveLink(linkRef)}
      >
        {linkText}
      </NavLink>
    </li>
  );
};

export default NavListItem;
