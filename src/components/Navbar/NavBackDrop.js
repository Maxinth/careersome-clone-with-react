import React from "react";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const NavBackDrop = ({ toggleSideBar }) => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <motion.div
      className="nav__backdrop"
      variants={pageVariant(0.5, 0)}
      {...variantProps}
      onClick={toggleSideBar}
    ></motion.div>
  );
};

export default NavBackDrop;
