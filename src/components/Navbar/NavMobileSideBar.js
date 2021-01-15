import React from "react";
import NavItems from "./NavItems";
import "./navMobileSideBar.css";
import { useGlobalContext } from "../context";
const NavMobileSideBar = () => {
  const { sideBarOpen } = useGlobalContext();
  const xOffset = sideBarOpen ? "0%" : "-100%";
  return (
    <section
      className="mobileSideBar"
      style={{ transform: `translateX(${xOffset})` }}
    >
      <NavItems />
      {/* {sideBarOpen && (
        <div className="mobileSideBar__backdrop" onClick={toggleSideBar}></div>
      )} */}
    </section>
  );
};

export default NavMobileSideBar;
