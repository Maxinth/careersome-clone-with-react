import React, { useState } from "react";
import CareerCardPage from "./CareerCardPage";
import "./careers.css";
import CareerMain from "./CareerMain";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const CareerContainer = () => {
  const [page, setPage] = useState(1);
  const { variantProps, pageVariant } = useVariants();
  const numberOfPageInView = (currentPage) => {
    return page === currentPage ? "current" : "";
  };
  return (
    <motion.section
      className="career"
      {...variantProps}
      variants={pageVariant(1)}
    >
      <div className="career__container">
        <CareerMain />
        <section className="career__cards">
          <CareerCardPage page={page} />
        </section>
        <section className="career__pagination">
          <div
            className={`career__page ${numberOfPageInView(1)}`}
            onClick={() => setPage(1)}
          >
            1
          </div>
          <div
            className={`career__page ${numberOfPageInView(2)}`}
            onClick={() => setPage(2)}
          >
            2
          </div>
          <div
            className={`career__page ${numberOfPageInView(3)}`}
            onClick={() => setPage(3)}
          >
            3
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default CareerContainer;
