import React, { useState } from "react";
import CareerCardPage from "./CareerCardPage";
import "./careers.css";
import CareerMain from "./CareerMain";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import CareerPagination from "./CareeerPagination";

const CareerContainer = () => {
  const [page, setPage] = useState(1);
  const { variantProps, pageVariant } = useVariants();
  const numberOfPageInView = (currentPage) => {
    return page === currentPage ? "current" : "";
  };

  const makeCurrentPage = (index) => setPage(index);
  return (
    <motion.section
      className="career"
      {...variantProps}
      variants={pageVariant(1)}
    >
      <div className="career__container">
        <CareerMain />

        {/* career cards view */}
        <section className="career__cards">
          <CareerCardPage page={page} />
        </section>

        {/* mock pagination section */}
        <section className="career__pagination">
          <CareerPagination
            makeCurrentPage={makeCurrentPage}
            stylePageInView={numberOfPageInView}
          />
        </section>
      </div>
    </motion.section>
  );
};

export default CareerContainer;
