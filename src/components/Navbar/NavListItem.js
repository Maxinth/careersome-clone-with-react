import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";

const NavListItem = ({ linkText, linkRef }) => {
  const location = useLocation();

  const makeActiveLink = (currentPath) =>
    location.pathname === currentPath ? "active" : "";

  const { toggleSideBar } = useGlobalContext();
  return (
    <li className="nav__listItem">
      <NavLink
        to={linkRef}
        className="nav__itemLink"
        onClick={toggleSideBar}
        activeClassName={makeActiveLink(linkRef)}
      >
        {linkText}
      </NavLink>
    </li>
  );
};

export default NavListItem;
