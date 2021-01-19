import React from "react";
import data from "./navItemsData";
import NavListItem from "./NavListItem";

const NavItems = () => {
  return (
    <>
      {data.map((item) => (
        <NavListItem key={item.linkText} {...item} />
      ))}
    </>
  );
};

export default NavItems;
