import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/career2.png";
import "./navbar.css";

import NavJobOptions from "./NavJobOptions";
import NavItems from "./NavItems";
import NavMobileSideBar from "./NavMobileSideBar";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { toggleSideBar } = useGlobalContext();

  return (
    <>
      <nav className="nav">
        {/* mobile nav */}
        <header className="nav__header__mobile">
          <MenuIcon className="nav__menuIcon" onClick={toggleSideBar} />
          <div className="nav__logoContainer">
            <img src={logo} alt="careerSome logo" className="nav__logo" />
          </div>
          <NavMobileSideBar />
        </header>

        {/* larger screens */}
        <header className="nav__headerLargerScreens">
          <img src={logo} alt="careerSome logo" className="nav__logo" />
          <ul className="nav__items">
            <NavItems />
          </ul>
        </header>
      </nav>

      <NavJobOptions />
    </>
  );
};

export default Navbar;
