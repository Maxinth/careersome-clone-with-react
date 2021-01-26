import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/career2.png";
import "./navbar.css";
import NavJobOptions from "./NavJobOptions";
import NavItems from "./NavItems";
import NavMobileSideBar from "./NavMobileSideBar";
import NavBackDrop from "./NavBackDrop";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleSideBar, sideBarOpen } = useGlobalContext();

  return (
    <>
      <nav className="nav">
        {/* mobile nav */}
        <header className="nav__header__mobile">
          <MenuIcon className="nav__menuIcon" onClick={toggleSideBar} />
          <div className="nav__logoContainer">
            <Link to="/">
              <img src={logo} alt="careerSome logo" className="nav__logo" />
            </Link>
          </div>
          <NavMobileSideBar />
        </header>

        {/* larger screens */}
        <header className="nav__headerLargerScreens">
          <Link to="/">
            <img src={logo} alt="careerSome logo" className="nav__logo" />
          </Link>
          <ul className="nav__items">
            <NavItems />
          </ul>
        </header>
        {/* backdrop component to complement the bottom backdrop when the sideBar comes into view */}
        {sideBarOpen && <NavBackDrop toggleSideBar={toggleSideBar} />}
      </nav>

      <NavJobOptions />
    </>
  );
};

export default Navbar;
