import React from "react";
import data from "../components/jobListingsComponents/internShipData";
import JobsInfoMain from "../components/jobListingsComponents/JobsInfoMain";
import JobListingPagination from "../components/jobListingsComponents/JobListingPagination";
import usePagination from "../components/usePagination";
import JobPageItems from "../components/jobListingsComponents/JobPageItems";
import { useVariants } from "../components/useVariants";
import { motion } from "framer-motion";

const Internships = () => {
  const { internships } = data;
  const { pages, mainText, extract, title } = internships;
  const { pageNo, makeCurrentPage } = usePagination();
  const { pageVariant, variantProps } = useVariants();

  return (
    <motion.section
      className="internships"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <JobsInfoMain extract={extract} mainText={mainText} title={title} />

      <JobPageItems pages={pages} pageNo={pageNo} pageData={internships} />
      <JobListingPagination makeCurrentPage={makeCurrentPage} pageNo={pageNo} />
    </motion.section>
  );
};

export default Internships;
