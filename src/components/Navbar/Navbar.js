import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/career2.png";
import "./navbar.css";
import data from "./navItemsData";
import NavListItem from "./NavListItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NavJobOptions from "./NavJobOptions";

const Navbar = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleDetails = () => setShowMoreDetails(!showMoreDetails);
  return (
    <>
      <nav className="nav">
        {/* mobile nav */}
        <header className="nav__header__mobile">
          <MenuIcon className="nav__menuIcon" />
          <div className="nav__logoContainer">
            <img src={logo} alt="careerSome logo" className="nav__logo" />
          </div>
        </header>

        {/* larger screens */}
        <header className="nav__headerLargerScreens">
          <img src={logo} alt="careerSome logo" className="nav__logo" />
          <ul className="nav__items">
            {data.map((item) => (
              <NavListItem
                key={item}
                itemName={item}
                showItem={showMoreDetails}
              />
            ))}
            <MoreVertIcon onClick={toggleDetails} />
          </ul>
        </header>
      </nav>
      <NavJobOptions />
    </>
  );
};

export default Navbar;
