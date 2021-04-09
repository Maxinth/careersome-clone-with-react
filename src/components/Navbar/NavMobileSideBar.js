import React from "react";
import NavItems from "./NavItems";
import "./navMobileSideBar.css";
import { useGlobalContext } from "../context";
import CloseIcon from "@material-ui/icons/Close";

const NavMobileSideBar = () => {
  const { sideBarOpen, toggleSideBar } = useGlobalContext();
  const xOffset = sideBarOpen ? "0%" : "-100%";

  return (
    <section
      className="mobileSideBar"
      style={{ transform: `translateX(${xOffset})` }}
    >
      <button
        type="button"
        className="mobileSideBar__closeBtn"
        onClick={toggleSideBar}
      >
        <CloseIcon className="mobileSideBar__closeIcon" />
      </button>
      <section className="mobileSideBar__container">
        <NavItems />
      </section>
    </section>
  );
};

export default NavMobileSideBar;
